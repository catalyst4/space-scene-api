import asyncHandler from 'express-async-handler'
import { Update } from '../../models/Update'

export const editUpdate = asyncHandler(async (req,res) => {
  
    const { title, desc, serialNumber, timestamp } = req.body 
    const id = req.params.id

    const update = await Update.findById(id)

    if(!update) {
        res.status(404).json({ error: 'Not found' })
    }

    if(!title && !desc && !serialNumber) {
        res.status(400).json({ error: 'Incomplete data' })
    }

    if(title && title !== update.title) update.title = title
    if(desc && desc !== update.desc) update.desc = desc
    if(serialNumber && serialNumber !== update.serialNumber) update.serialNumber = serialNumber
    if(timestamp && timestamp !== update.timestamp) update.timestamp = timestamp

    await update.save()

    return res.status(200).json({ update })
    
})
