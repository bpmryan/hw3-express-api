// 404 handler (unknown routes)
export const notFound = (req, res, next) => {
    res.status(404).json({
        error: 'Not Found', 
        message: `Route ${req.originalUrl} does not exist`
    });
};

// Global error handler (4 params!)
export const errorHandler = (err, req, res, next) => {
    console.error('Error: ', err.message);

    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack
        })
    });
};