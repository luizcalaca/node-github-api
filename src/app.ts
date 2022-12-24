import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apicache from 'apicache';
import router from './routes/routes';

const app = express();
const cache = apicache.middleware;

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use(cache('5 minutes'));
app.use('/api', router);

export default app;
