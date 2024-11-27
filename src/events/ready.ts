import { createEvent } from '../utils/event';
import { logger } from '../utils/logger';

export default createEvent('ready', true, (instance) => {
    logger.info(`${instance.user?.username} is ready!`);
});
