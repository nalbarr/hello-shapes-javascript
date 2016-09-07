import {Router} from 'express';
import HttpStatus from 'http-status-codes';
const router = Router({strict: true});

router.get('*', (req, res) => {
  res.status(HttpStatus.NOT_FOUND).send('Not Found');
});

export default router;
