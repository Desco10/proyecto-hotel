//archivo de inicio  de nuestra  aplicacion 

//common js 
import 'dotenv/config';
import http from 'http';
import express from 'express';
import morgan from 'morgan'


import authRouter from './routes/auth.routes.js';

function main () {
   
    const port = +process.env.APP_PORT || 4000;
    const app = express();

    app.use(morgan('dev'));

app.get('/',(req, res) => {
res.send('hola mundo!');
});

app.use('/auth',authRouter);
const httpServer = http.createServer(app);   

    httpServer.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
}

main();