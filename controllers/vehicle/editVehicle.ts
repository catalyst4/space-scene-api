import asyncHandler from 'express-async-handler'
import { Vehicle } from '../../models/Vehicle'

export const editVehicle = asyncHandler(async (req,res) => {

    const { name, series, manufacturer } = req.body
    const id = req.params.id
    
    const vehicle = await Vehicle.findById({ _id: id })

    if(!vehicle) {
        return res.status(404).json({ error: 'Not found' })
    }

    if(!name && !series && !manufacturer) {
        return res.status(401).json({ error: 'Incomplete data' })
    }

    if(name && name !== vehicle.name) vehicle.name = name
    if(series && series !== vehicle.series) vehicle.series = series 
    if(manufacturer && manufacturer !== vehicle.manufacturer) vehicle.manufacturer = manufacturer 

    await vehicle.save()

    return res.status(200).json({ vehicle })

})