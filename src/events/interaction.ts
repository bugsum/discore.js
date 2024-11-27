import { createEvent } from '../utils/event';

export default createEvent(
    'interactionCreate',
    false,
    (instance, interaction) => {
        if (interaction.isCommand()) {
            interaction.reply('pong');
        }
    },
);
