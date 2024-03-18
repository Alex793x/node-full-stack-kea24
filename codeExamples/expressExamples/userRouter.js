import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send({data: 'Users list ...' });
});

router.post('/', (req, res) => {
  res.send({ data: 'User created!' });
});

export default router;
