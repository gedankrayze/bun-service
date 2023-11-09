import response from '@/utils/response';
import {Context} from 'hono';
import isDocker from '@/utils/isDocker.ts';

export default async (ctx: Context) =>
    ctx.json(response.result({
        version: '1.0.0',
        bunVersion: Bun.version,
        isDocker: isDocker()
    }));