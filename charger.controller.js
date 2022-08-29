import {chargerRepository as repository} from './charger-repository.js'

export const createOneRequest = async (req, res) => {
    let charger = repository.createEntity()
    charger.type = req.body.name ?? null
    charger.serialNumber = req.body.name ?? null
    charger.status = req.body.name ?? null
    let lastUpdated = new Date().toUTCString();
    charger.lastUpdated = lastUpdated;
    const entityId = await repository.save(charger)
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
    let newCharger = await repository.fetch(req.params.id)
    newCharger.type = req.body.name ?? null
    newCharger.serialNumber = req.body.name ?? null
    newCharger.status = req.body.name ?? null
    let lastUpdated = new Date().toUTCString();
    newCharger.lastUpdated = lastUpdated;
    const entityId = await repository.save(newCharger)
    res.status(200).json({entityId});
}

export const deleteOneRequest = async (req, res) => {
    await repository.remove(req.params.id)
    res.status(202).json({id: req.params.id});
}