const winston = require('winston');
const { combine, timestamp, printf, label } = winston.format;


const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});


const logger = winston.createLogger({
    level: 'info',
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'info.log' })
    ]
});

module.exports = logger;