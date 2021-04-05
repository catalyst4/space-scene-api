import express from 'express'
import { addUpdate } from '../controllers/update/addUpdate'
import { editUpdate } from '../controllers/update/editUpdate'
import { getUpdates } from '../controllers/update/getUpdates'
import { removeUpdate } from '../controllers/update/removeUpdate'

const router = express.Router()

router.route('/')
    .get(getUpdates)    
    .post(addUpdate)

router.post('/:id/edit', editUpdate)
router.post('/:id/delete', removeUpdate)

export default router