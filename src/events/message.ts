import { createEvent, logger } from '../utils';

export default createEvent('messageCreate', false, (instance, message) => {
    if (message.author.id === instance.user?.id) return;
});
