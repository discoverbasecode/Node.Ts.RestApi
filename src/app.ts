import 'dotenv/config';
import express from 'express';
import cors from 'express';
import userRoute from './user/infrastructure/routes/user.routes';
import dbInit from '../config/MongoDb.config';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`server is run on port ${port}`));
