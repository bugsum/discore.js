import { Collection, Client as DiscordClient, Snowflake } from 'discord.js';
import { DiscoreOptions, Event } from './types';
import { initializeEvent, logger, traverse } from './utils';

export class Discore extends DiscordClient {
    developers: Snowflake[];
    eventsPath: string;

    constructor(options: DiscoreOptions) {
        super(options);

        this.developers = options?.developers || [];
        this.eventsPath = options.eventsPath;
    }

    public initialize(token: string) {
        // console.clear();
        if (!token) throw new Error('No token provided');

        this.login(token).then(() => {
            logger.info(`Token has been initialized`);
        });

        this.registerEvents(this);
    }

    public async registerEvents(instance: Discore): Promise<void> {
        const events = (await traverse(this.eventsPath)) as Event[];

        if (!events.length) {
            logger.warn('No events found in the events directory');
            return;
        }

        for (const event of events as Event[]) {
            // console.log(event);
            initializeEvent(this, event);
        }
    }
}
