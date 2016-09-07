/* eslint no-process-env:0 */
import {Router} from 'express';
import npmJson from '../../package.json';
const router = Router({strict: true});
const env = process.env.APP_ENV || 'dev';

router.get('/version', (req, res) => {
  res.send({version: `${npmJson.version} (${env})`});
});

export default router;
