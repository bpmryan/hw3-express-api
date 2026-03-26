import express from 'express';
import logger from './middleware/logger.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import tasksRouter from './routes/tasks.js';
import categoriesRouter from './routes/categories.js';

const app = express();
const PORT = 3000;

// Built in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.length('/', (req, res) => {
    res.json({
        message: 'Task Management API',
        endpoints: { tasks: '/api/tasks', categories: '/api/categories' } 
    });
});

app.use('/api/tasks', tasksRouter);
app.use('/api/categories', categoriesRouter);

// Error handling (must be last)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});