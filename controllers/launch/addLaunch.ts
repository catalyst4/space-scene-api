import asyncHandler from 'express-async-handler'
import { Launch } from '../../models/Launch'

export const addLaunch = asyncHandler(async (req,res) => {

    const { name, vehicle } = req.body 

    if(!name || !vehicle) {
        return res.status(400).json({ error: 'Not all fields complete' })
    }

    const launch = new Launch({ name, vehicle })

    await launch.save()

    return res.status(200).json({ launch })

})