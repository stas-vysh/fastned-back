import express from 'express'
import {
    createOneRequest,
    readAllRequest,
    readOneRequest,
    updateOneRequest,
    deleteOneRequest
} from './location.controller.js'

export const locationsRoutes = express.Router();

locationsRoutes.post('/', createOneRequest);
locationsRoutes.get('/', readAllRequest);
locationsRoutes.get('/:id', readOneRequest);
locationsRoutes.put('/:id', updateOneRequest);
locationsRoutes.delete('/:id', deleteOneRequest);