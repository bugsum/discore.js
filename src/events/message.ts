import { createEvent } from '../utils/event';
import { logger } from '../utils/logger';

export default createEvent('messageCreate', false, (instance, message) => {
    if (message.author.id === instance.user?.id) return;

    logger.info(`Message: ${message.content}`);
});
