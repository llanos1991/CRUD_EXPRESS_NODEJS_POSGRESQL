import express from 'express'
import morgan from 'morgan'
import { json } from 'sequelize/types';

//imported route
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;








//https://www.youtube.com/watch?v=sA3t4d1v7OI&t=2739s