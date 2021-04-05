import asyncHandler from 'express-async-handler'
import { Launch } from '../../models/Launch'

export const getLaunch = asyncHandler(async (req,res) => {
    
    const id = req.params.id 

    const launch = await Launch.findById(id)

    if(!launch) {
        res.status(404).json({ error: 'Not found' })
    }

    return res.status(200).json({ launch })

})