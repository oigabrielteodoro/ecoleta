import { Router } from 'express'

import PointController from '@/app/controllers/PointController'

const router = Router()

router.get('/points', PointController.index)
router.post('/points', PointController.store)

export default router
