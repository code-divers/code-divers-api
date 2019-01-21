import * as winston from 'winston';

export const logger = winston.createLogger({
	level: 'debug',
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.splat(),
		winston.format.cli()),
	transports: [
		new winston.transports.Console()
	]
});
