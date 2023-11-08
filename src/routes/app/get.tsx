import Layout from '@/ui/components/Layout';
import {Context} from 'hono';

export default (ctx: Context) => ctx.html(<Layout>demo content</Layout>);