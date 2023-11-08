import {Hono} from 'hono';
import App from './app.tsx';

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

app.get('/docs', context => context.html(<App/>));

export default app;
