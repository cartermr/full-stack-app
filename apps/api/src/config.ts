import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'test', 'production'])
		.default('development'),
	API_PORT: z.coerce.number().int().min(1).max(65535),
	DATABASE_FILE_NAME: z.string().min(1),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
	const parseIssues = parsed.error.issues
		.map((issue) => ` ${issue.path.join('.')}: ${issue.message}`)
		.join('\n');

	throw new Error(`Invalid enviromnet variables:\n${parseIssues}`);
}

export const config = Object.freeze(parsed.data)
export type Config = typeof config