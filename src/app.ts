import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { dogController } from './controller/dog-controller';

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/dog', dogController);


app.listen(port, () => {
    console.log('Server is listening on http://localhost:'+port);
})