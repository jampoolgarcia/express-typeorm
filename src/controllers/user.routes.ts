import { Router } from 'express';
import { createUser, updateUser, deleteUser } from '../services/user.service';

const router = Router ();

router.post('/users', createUser);
router.patch('/users', updateUser);
router.delete('/users', deleteUser);

export default router;