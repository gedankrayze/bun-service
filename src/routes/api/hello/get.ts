import response from '@/utils/response';
import {Context} from 'hono';

export default async (ctx: Context) =>
    ctx.json(response.result('hello there'));