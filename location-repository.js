import { Entity, Schema, Client } from 'redis-om'

class Location extends Entity {}

let locationSchema = new Schema(Location, {
    entityId: { type: 'string' },
    name: { type: 'string' },
    location: { type: 'number' },
    chargers: { type: 'string[]' },
    postalCode: { type: 'string' },
    lastUpdated: { type: 'string' },
    country: { type: 'string' },
})

let client = await new Client().open()

export const locationRepository = client.fetchRepository(locationSchema)

await locationRepository.createIndex()