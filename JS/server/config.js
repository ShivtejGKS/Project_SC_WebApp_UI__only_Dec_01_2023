module.exports = {
    host: process.env.DB_HOST || '10.16.1.70',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'NEWSQL\SQLEXPRESS',
    password: process.env.DB_PASSWORD || 'Rci@1234',
    database: process.env.DB_DATABASE || 'project_management'
};
