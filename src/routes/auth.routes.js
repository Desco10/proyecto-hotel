import { Router} from 'express';

const router = Router();

router.get('/login',(req, res) => {
    res.send('esta es la ruta  de login');
});

router.get('/singnup',(req, res) => {
    res.send('esta es la ruta  de registro');
});

export default router;