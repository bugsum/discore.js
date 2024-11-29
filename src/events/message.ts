import { createEvent, logger } from '../utils';

export default createEvent('messageCreate', false, (instance, message) => {
    if (message.author.id === instance.user?.id) return;

    if (message.content === 'showping') {
        message.reply(`My ping is ${instance.ws.ping}ms`);
    }
});
