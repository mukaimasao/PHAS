import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('App rodando');
});

router.get('/users', UserController.getAllValidation, UserController.GetAllUsers,);
router.get('/users/:id', UserController.getByPkValidation, UserController.getByPkUser,);
router.post('/users', UserController.createValidation, UserController.createUser,);
router.patch('/users/:id', UserController.updateByPkValidation, UserController.updateByPkUser,);
router.delete('/users/:id', UserController.deleteByPkValidation, UserController.deleteByPkUser,);

export { router };
