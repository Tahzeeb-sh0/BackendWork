import express from 'express';
import router from './user.routes';
import { publishAVideo } from '../controllers/video.contoller';
router = express.Router();

router
.route('/uploadVideo')
.post(,publishAVideo)


export default router;