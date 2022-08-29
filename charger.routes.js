import express from 'express'
import {
    createOneRequest,
    readAllRequest,
    readOneRequest,
    updateOneRequest,
    deleteOneRequest
} from './charger.controller.js'

export const chargersRoutes = express.Router();

chargersRoutes.post('/', createOneRequest);
chargersRoutes.get('/', readAllRequest);
chargersRoutes.get('/:id', readOneRequest);
chargersRoutes.put('/:id', updateOneRequest);
chargersRoutes.delete('/:id', deleteOneRequest);