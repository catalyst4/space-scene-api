import asyncHandler from 'express-async-handler'
import { Vehicle } from '../../models/Vehicle'

export const removeVehicle = asyncHandler(async (req,res) => {

    const id = req.params.id

    const vehicle = await Vehicle.findByIdAndDelete({ _id: id })

    if(!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' })
    }

    return res.status(200).json({ vehicle })

})