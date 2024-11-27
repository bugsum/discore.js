import { Event, EventListener, EventNames } from '../types';

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
