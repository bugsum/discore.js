import { Client as DiscordClient, Snowflake } from 'discord.js';
import { DiscoreOptions, Event } from './types';
import { logger } from './utils/logger';
import events from './events';

export class Discore extends DiscordClient {
    developers: Snowflake[];

    constructor(options: DiscoreOptions) {
        super(options);

        this.developers = options?.developers || [];
    }

    public initialize(token: string) {
        console.clear();
        if (!token) throw new Error('No token provided');

        this.login(token).then(() => {
            logger.info(`Token has been initialized`);
        });

        this.registerEvents(this, events);
    }

    public registerEvents(instance: Discore, events: Event[]): void {
        for (const event of events) {
            event.once
                ? instance.once(event.name, (...args) => {
                      try {
                          event.listener(instance, ...args);
                          logger.info(`Registered Event: ${event.name}`);
                      } catch (error) {
                          logger.error(error);
                      }
                  })
                : instance.on(event.name, (...args) => {
                      try {
                          event.listener(instance, ...args);
                          logger.info(`Registered Event: ${event.name}`);
                      } catch (error) {
                          logger.error(error);
                      }
                  });
        }
    }
}
