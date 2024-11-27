import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, errors, json } = format;

// Custom log format
const customFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

// Create the logger
export const logger = createLogger({
    level: 'info', // Default level
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp
        errors({ stack: true }), // Print stack traces for errors
        json(), // Enable JSON format for structured logs
        customFormat, // Custom format
    ),
    transports: [
        // Write logs to a file
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.File({ filename: 'logs/debug.log', level: 'debug' }),
    ],
});

// Add console transport for development
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: combine(colorize(), customFormat), // Add colorized logs
        }),
    );
}
