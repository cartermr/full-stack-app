import { testClient } from 'hono/testing'
import { expect, test } from 'vitest'
import { app } from '../src/app.js'

const client = testClient(app)

test('GET /api/health responds 200 with OK', async () => {
    const apiResponse = await client.api.health.$get()

    expect(apiResponse.status).toBe(200)
    await expect(apiResponse.json()).resolves.toStrictEqual({ API_HEALTH: 'OK' })
})

test('Unknown routes should fail and report 404', async () => {
    const apiResponse = await app.request('/api/nope')

    expect(apiResponse.status).toBe(404)
})