import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send({ data: 'Products list ...' });
});

router.post('/', (req, res) => {
  res.send({ data: 'Product created!' });
});

export default router;
