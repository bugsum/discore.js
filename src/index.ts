import { GatewayIntentBits as Intents } from 'discord.js';
import { Discore } from './discore';
import { getEnv } from './utils/env';

const instance = new Discore({
    intents: [Intents.Guilds, Intents.GuildMembers, Intents.GuildMessages],
});

instance.initialize(getEnv('CLIENT_TOKEN'));
