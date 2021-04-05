import asyncHandler from 'express-async-handler'
import { Launch } from '../../models/Launch'

export const editLaunch = asyncHandler(async (req,res) => {

    const { name, vehicle } = req.body
    const id = req.params.id 

    const launch = await Launch.findById(id)

    if(!launch) {
        return res.status(404).json({ error: 'Not found' })
    }

    if(name && name !== launch.name) launch.name = name
    if(vehicle && vehicle !== launch.vehicle) launch.vehicle = vehicle

    await launch.save()

    return res.status(200).json({ launch })

})