import asyncHandler from 'express-async-handler'
import { Update } from '../../models/Update'

export const removeUpdate = asyncHandler(async (req,res) => {

    const id = req.params.id

    const update = await Update.findByIdAndDelete({ _id: id })

    if(!update) {
        return res.status(404).json({ error: 'Update not found' })
    }

    return res.status(200).json({ update })

})