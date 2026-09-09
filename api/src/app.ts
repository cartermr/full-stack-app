import { Hono } from 'hono';
import { healthRoutes } from './routes/healthRoutes.js';

export const app = new Hono().basePath('/api').route('/', healthRoutes);

export type AppType = typeof app;
