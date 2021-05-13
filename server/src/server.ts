import express from 'express';
import routes from './routes/routes';

import './database';

class App {
    public server: express.Application;    
    
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.server.use(express.json());
    }

    private routes(){
        this.server.use(routes);
    }
}

export default new App();