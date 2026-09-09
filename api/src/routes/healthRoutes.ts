import { Hono } from 'hono';
import { apiHealth } from '../services/healthService.js';

export const healthRoutes = new Hono().get('/health', (context) =>
	context.json(apiHealth()),
);
