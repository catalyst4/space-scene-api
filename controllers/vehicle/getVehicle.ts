import asyncHandler from 'express-async-handler'
import { Vehicle } from '../../models/Vehicle'

export const getVehicle = asyncHandler(async (req,res) => {

    const name = (req.params.name).toUpperCase()

    const vehicle = await Vehicle.findOne({ name })

    if(!vehicle) {
        return res.status(200).json({ error: 'Vehicle not found' })
    }

    return res.status(200).json({ vehicle })

})