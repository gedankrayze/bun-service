import {Hono} from 'hono';
import {serveStatic} from 'hono/bun';
import App from './app.tsx';
import parseRoutes from './utils/parseRoutes.ts';

const app = new Hono();

app.use('*', async (c, next) =>
{
    const start = Bun.nanoseconds();
    await next();
    const end = Bun.nanoseconds();
    c.res.headers.set('X-Response-Time', `${(end - start) / 1000000}`);
    c.res.headers.set('Server', 'bun-service');
});

await parseRoutes('routes', app);

app.use('/favicon.ico', serveStatic({path: './public/favicon.ico'}));

app.get('/', context => context.text('Hello Hono!'));

app.get('/docs', context => context.html(<App/>));

export default app;

// export default {
//     port: Number(process.env.PORT) || 3000,
//     fetch: app.fetch
// };

