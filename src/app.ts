import express from 'express';
import morgan from  'morgan';

const app = express();
//app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlcoded({etend: false}));

export default app ;

