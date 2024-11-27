import { createEvent } from '../utils/event';
import { logger } from '../utils/logger';

export default createEvent('messageCreate', false, (instance, message) => {
    if (message.author.id === instance.user?.id) return;

    if (message.content === 'ping') {
        message.reply('pong');
    }
});
