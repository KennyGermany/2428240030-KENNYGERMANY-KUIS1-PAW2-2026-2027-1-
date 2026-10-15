import { Router } from 'express';
import {
  createObat, getAllObat, getObatById, updateObat, deleteObat,
} from '../controllers/obatController.js';

const router = Router();

router.post('/', createObat);
router.get('/', getAllObat);
router.get('/:id', getObatById);
router.put('/:id', updateObat);
router.delete('/:id', deleteObat);

export default router;