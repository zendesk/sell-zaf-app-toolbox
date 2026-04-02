/**
 * Minimal undici stub for Jest tests.
 *
 * cheerio 1.2.0 imports undici for its URL-fetch helpers (fromURL / fromURL*).
 * Test suites never invoke those helpers, so we can safely return a no-op
 * object here. This prevents undici from registering its Web-API type
 * assertions (ReadableStream, MessagePort, etc.) at module-load time, which
 * would otherwise crash jest-environment-jsdom.
 */
module.exports = {};

