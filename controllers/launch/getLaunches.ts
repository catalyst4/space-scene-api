import asyncHandler from 'express-async-handler'
import { Launch } from '../../models/Launch'

export const getLaunches = asyncHandler(async (req,res) => {

    const launches = await Launch.find()

    if(!launches) {
        return res.status(404).json({ error: 'No launches found' })
    }

    return res.status(200).json({ launches })

})