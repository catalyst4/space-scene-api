import asyncHandler from 'express-async-handler'
import { Launch } from '../../models/Launch'

export const deleteLaunch = asyncHandler(async (req,res) => {

    const id = req.params.id 

    const launch = await Launch.findByIdAndDelete(id)

    if(!launch) {
        return res.status(404).json({ error: 'Not found' })
    }

    return res.status(200).json({ launch })

})