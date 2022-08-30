import {locationRepository} from './location-repository.js'
import {chargerRepository} from './charger-repository.js'

export const createOneRequest = async (req, res) => {
    let location = locationRepository.createEntity()
    location.name = req.body.name ?? null
    location.location = req.body.location ?? 0
    location.postalCode = req.body.postalCode ?? null
    location.country = req.body.country ?? null
    location.lastUpdated = new Date().toUTCString();
    const chargers = Promise.all(req.body.chargers.map(async (bodyCharger) => {
        let charger = chargerRepository.createEntity()
        charger.status = bodyCharger.status ?? null
        charger.type = bodyCharger.type ?? null
        charger.serialNumber = bodyCharger.serialNumber ?? null
        charger.lastUpdated = new Date().toUTCString();
        return await chargerRepository.save(charger)
    }))
    location.chargers = await chargers ?? []
    const entityId = await locationRepository.save(location)
    res.status(201).json({entityId});
}

export const readAllRequest = async (req, res) => {
    const locations = await locationRepository.search().returnAll()
    res.status(200).json({locations});
}

export const readOneRequest = async (req, res) => {
    let location = await locationRepository.fetch(req.params.id)
    const chargers = await Promise.all(location.chargers.map(async (entityId) => {
        return await chargerRepository.fetch(entityId)
    }))
    res.status(200).json({location, chargers});
}

export const updateOneRequest = async (req, res) => {
    let newLocation = await locationRepository.fetch(req.params.id)
    newLocation.name = req.body.name ?? null
    newLocation.location = req.body.location ?? 0
    newLocation.postalCode = req.body.postalCode ?? null
    newLocation.country = req.body.country ?? null
    newLocation.lastUpdated = new Date().toUTCString();
    const chargers = Promise.all(req.body.chargers.map(async (bodyCharger) => {
        if (bodyCharger.entityId) {
            let oldCharger = await chargerRepository.fetch(bodyCharger.entityId)
            oldCharger.status = bodyCharger.status ?? null
            oldCharger.type = bodyCharger.type ?? null
            oldCharger.serialNumber = bodyCharger.serialNumber ?? null
            oldCharger.lastUpdated = new Date().toUTCString();
            return await chargerRepository.save(oldCharger)
        } else {
            let newCharger = chargerRepository.createEntity()
            newCharger.status = bodyCharger.status ?? null
            newCharger.type = bodyCharger.type ?? null
            newCharger.serialNumber = bodyCharger.serialNumber ?? null
            newCharger.lastUpdated = new Date().toUTCString();
            return await chargerRepository.save(newCharger)
        }
    }))
    newLocation.chargers = await chargers ?? []
    const entityId = await locationRepository.save(newLocation)
    res.status(200).json({entityId});
}

export const deleteOneRequest = async (req, res) => {
    await locationRepository.remove(req.params.id)
    res.status(202).json({id: req.params.id});
}