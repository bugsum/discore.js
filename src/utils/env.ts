import { config } from 'dotenv';

config({ path: process.cwd() + '/.env' });

export function getEnv(key: string, defaultValue?: string): string {
    const value = process.env[key] ?? defaultValue;
    if (!value) {
        throw new Error(`The environment variable ${key} is required`);
    }
    return value;
}
