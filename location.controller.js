import {locationRepository as repository} from './location-repository.js'

export const createOneRequest = async (req, res) => {
    let location = repository.createEntity()
    location.name = req.body.name ?? null
    location.location = req.body.location ?? 0
    location.chargers = req.body.chargers.map((charger) => charger.entityId) ?? []
    location.postalCode = req.body.postalCode ?? null
    location.country = req.body.country ?? null
    let lastUpdated = new Date().toUTCString();
    location.lastUpdated = lastUpdated;
    const entityId = await repository.save(location)
    res.status(201).json({entityId});
}

export const readAllRequest = async (req, res) => {
    const locations = await repository.search().returnAll()
    res.status(200).json({locations});
}

export const readOneRequest = async (req, res) => {
    let location = await repository.fetch(req.params.id)
    res.status(200).json({location});
}

export const updateOneRequest = async (req, res) => {
    let newLocation = await repository.fetch(req.params.id)
    newLocation.name = req.body.name ?? null
    newLocation.location = req.body.location ?? 0
    newLocation.chargers = req.body.chargers.map((charger) => charger.entityId) ?? []
    newLocation.postalCode = req.body.postalCode ?? null
    newLocation.country = req.body.country ?? null
    let lastUpdated = new Date().toUTCString();
    newLocation.lastUpdated = lastUpdated;
    const entityId = await repository.save(newLocation)
    res.status(200).json({entityId});
}

export const deleteOneRequest = async (req, res) => {
    await repository.remove(req.params.id)
    res.status(202).json({id: req.params.id});
}