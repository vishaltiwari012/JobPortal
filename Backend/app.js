import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRouter from './routes/userRouter.js';
import applicationRouter from './routes/applicationRouter.js';
import jobRouter from './routes/jobRouter.js';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';

//middlewares
const app = express();
dotenv.config({path : './config/config.env'});
app.use(cors())
//Connect backend with frontend
app.use(cors({
    methods : ['GET', 'PUT', 'POST', 'DELETE'],
    credentials : true,
}))

//cookie parser
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}))

//restructuring routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/job', jobRouter);
dbConnection();

app.use(errorMiddleware);
export default app;