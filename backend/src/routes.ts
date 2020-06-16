import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);

routes.post('/points', upload.single('image'), pointsController.create);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
