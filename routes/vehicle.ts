import express from 'express'
import { addVehicle } from '../controllers/vehicle/addVehicle'
import { editVehicle } from '../controllers/vehicle/editVehicle'
import { getVehicle } from '../controllers/vehicle/getVehicle'
import { getVehicles } from '../controllers/vehicle/getVehicles'
import { removeVehicle } from '../controllers/vehicle/removeVehicle'
const router = express.Router()

router.route('/')
    .get(getVehicles)
    .post(addVehicle)

router.get('/:name', getVehicle)

router.post('/:id/edit', editVehicle)
router.post('/:id/delete', removeVehicle)

export default router