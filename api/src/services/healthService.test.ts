import { expect, test } from 'vitest';
import { apiHealth } from './healthService.js';

test('API health should report OK', () => {
	expect(apiHealth()).toStrictEqual({ API_HEALTH: 'OK' });
});
