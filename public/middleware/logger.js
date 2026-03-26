const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originUrl;

    // log when request comes in
    console.log(`[${timestamp}] ${method} ${url}`);

    // track reponse time 
    const start = Date.now();

    // when reponse finishes 
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} (${duration}ms)`);

    });
    // continue to next middleware
    next();
};

export default logger;