import asyncHandler from 'express-async-handler'
import { Vehicle } from '../../models/Vehicle'

export const addVehicle = asyncHandler(async (req,res) => {

    const { name, series, manufacturer } = req.body 

    if(!name || !series || !manufacturer) {
        return res.status(401).json({ error: 'Incomplete data' })
    }

    const vehicle = new Vehicle({ name, series, manufacturer })

    await vehicle.save()

    return res.status(200).json({ vehicle })

})