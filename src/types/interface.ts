import { Awaitable, ClientEvents } from 'discord.js';
import { ClientOptions, Snowflake } from 'discord.js';
import { Discore } from '../discore';

export interface DiscoreOptions extends ClientOptions {
    developers?: Snowflake[];
}

export type EventNames = keyof ClientEvents;
export type EventListener<T extends EventNames> = (
    instance: Discore,
    ...args: ClientEvents[T]
) => Awaitable<unknown>;
export interface Event<T extends EventNames = EventNames> {
    name: T;
    once: boolean;
    listener: EventListener<T>;
}
