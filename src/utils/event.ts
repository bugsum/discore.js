import { Discore } from '../discore';
import { Event, EventListener, EventNames } from '../types';
import { logger } from './logger';

export function createEvent<T extends EventNames>(
    name: T,
    once: boolean,
    listener: EventListener<T>,
): Event<T> {
    return {
        name,
        once,
        listener,
    };
}

export function initializeEvent(instance: Discore, event: Event): void {
    event.once
        ? instance.once(event.name, (...args) => {
              event.listener(instance, ...args);
          })
        : instance.on(event.name, (...args) => {
              event.listener(instance, ...args);
          });

    logger.debug(`Registered Event: ${event.name}`);
}
