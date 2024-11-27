import { GatewayIntentBits as Intents } from 'discord.js';
import { Discore } from './discore';
import { getEnv } from './utils/env';
import express from 'express';

const instance = new Discore({
    intents: [Intents.Guilds, Intents.GuildMembers, Intents.GuildMessages],
});

instance.initialize(getEnv('CLIENT_TOKEN'));

const app = express();

app.get('/', (_, res) => {
    res.send('Discord Bot is online');
});

app.listen(3000, () => console.log('Express server running on port 3000'));
