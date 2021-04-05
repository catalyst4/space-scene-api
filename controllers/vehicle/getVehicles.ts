import asyncHandler from 'express-async-handler'
import { Vehicle } from '../../models/Vehicle'

export const getVehicles = asyncHandler(async (req,res) => {

    const vehicles = await Vehicle.find()

    if(!vehicles) {
        return res.status(404).json({ error: 'Not found' })
    }

    return res.status(200).json({ vehicles })

})