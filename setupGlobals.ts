// @ts-nocheck
/**
 * Polyfill globals that Jest's jsdom sandbox does not expose by default.
 *
 * 1. Web Encoding / Streams / File APIs – needed by undici (a transitive dep
 *    of cheerio 1.2.0) at module-load time.
 * 2. setImmediate / clearImmediate – removed from jsdom since jsdom 16;
 *    restored from Node.js timers so flushPromises() keeps working.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const { TextDecoder, TextEncoder } = require('util');
const { ReadableStream, WritableStream, TransformStream } = require('stream/web');
const { Blob, File } = require('buffer');
const { setImmediate, clearImmediate } = require('timers');

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.TransformStream = TransformStream;
global.Blob = Blob;
global.File = File;
global.setImmediate = global.setImmediate || setImmediate;
global.clearImmediate = global.clearImmediate || clearImmediate;
