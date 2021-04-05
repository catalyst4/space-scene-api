import asyncHandler from 'express-async-handler'
import { Update } from '../../models/Update'

export const getUpdates = asyncHandler(async (req,res) => {

    const updates = await Update.find()

    if(!updates) { 
        return res.status(404).json({ error: 'No updates found' })
    }

    return res.status(200).json({ updates })

})