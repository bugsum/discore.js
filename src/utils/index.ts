import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { logger } from './logger';

export * from './command';
export * from './env';
export * from './event';
export * from './logger';

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export async function traverse(directory: string): Promise<Object[]> {
    const entries = readdirSync(directory, { withFileTypes: true });
    const result: Object[] = [];

    for (const entry of entries) {
        const finalPath = join(directory, entry.name);

        if (entry.isDirectory()) {
            const subEntries = await traverse(finalPath);

            result.push(...subEntries);
        } else if (entry.isFile()) {
            try {
                result.push(require(finalPath).default);
            } catch (error) {
                logger.error(`Failed to load event: ${finalPath}`);
                logger.error(error);
            }
        }
    }

    return result;
}

export function fetchConfig(path: string): Record<string, any> {
    const config = readFileSync(path, 'utf-8');
    const YAML = require('yaml');
    const result = YAML.parse(config);

    return result;
}
