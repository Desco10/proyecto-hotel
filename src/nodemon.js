
import path from 'path';
import nodemon from 'nodemon';
import { watch } from 'fs';

nodemon({

     script: path.resolve('src','server.js'),
     watch: ['src'],
    ext:'js ts',
    exec:'node'
    });