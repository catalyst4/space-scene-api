import express from 'express'
import { addLaunch } from '../controllers/launch/addLaunch'
import { editLaunch } from '../controllers/launch/editLaunch'
import { getLaunch } from '../controllers/launch/getLaunch'
import { getLaunches } from '../controllers/launch/getLaunches'
import { deleteLaunch } from '../controllers/launch/deleteLaunch'
const router = express.Router()

router.route('/')
    .get(getLaunches)
    .post(addLaunch)

router.get('/:id', getLaunch)
router.post('/:id/edit', editLaunch)
router.post('/:id/delete', deleteLaunch)