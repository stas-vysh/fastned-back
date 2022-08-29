import { Entity, Schema, Client } from 'redis-om'

class Charger extends Entity {}

let chargerSchema = new Schema(Charger, {
    entityId: { type: 'string' },
    type: { type: 'string' },
    serialNumber: { type: 'string' },
    status: { type: 'string' },
    lastUpdated: { type: 'string' }
})

let client = await new Client().open()

export const chargerRepository = client.fetchRepository(chargerSchema)

await chargerRepository.createIndex()