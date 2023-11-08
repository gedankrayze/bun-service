import {Hono} from 'hono';

const app = new Hono();

app.use('*', async (c, next) =>
{
    const start = Date.now();
    await next();
    const end = Date.now();
    c.res.headers.set('X-Response-Time', `${end - start}`);
});

app.get('/', context => context.text('Hello Hono!'));

app.get('/api', context => context.json({
    version: '1.0.0'
}));

export default app;
