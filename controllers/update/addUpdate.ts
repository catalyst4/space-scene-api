import asyncHandler from 'express-async-handler'
import { Update } from '../../models/Update'

export const addUpdate = asyncHandler(async (req,res) => {

    const { title, desc, serialNumber, timestamp } = req.body

    if(!title || !serialNumber || !timestamp) {
        return res.status(400).json({ error: 'Incomplete data' })
    }

    const update = new Update({ title, desc, serialNumber, timestamp })

    await update.save()

    return res.status(200).json({ update })

})