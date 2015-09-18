exports = module.exports = function(app, middlewares) {
    middlewares.forEach(function(current) {
        if(Array.isArray(current)) {
            // 0th index is mount point, 1st index is the middleware
            app.use(current[0], current[1]);
        } else {
            app.use(current);
        }
    });
};
