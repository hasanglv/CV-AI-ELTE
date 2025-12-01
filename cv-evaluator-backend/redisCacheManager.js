// redisCacheManager.js
// In-memory Redis-like cache manager with TTL, auto-clean, set, get, delete

import events from "events";

export class RedisCacheManager extends events.EventEmitter {
  constructor() {
    super();
    this.cache = {};
    this.cleanInterval = setInterval(() => this._cleanup(), 5000);
  }

  set(key, value, ttl = 3600) {
    this.cache[key] = {
      value,
      expiresAt: Date.now() + ttl * 1000,
    };

    this.emit("set", key);
    console.log(`[RedisSim] SET key=${key}`);
  }

  get(key) {
    const item = this.cache[key];

    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      console.log(`[RedisSim] Key expired: ${key}`);
      delete this.cache[key];
      return null;
    }

    this.emit("get", key);
    return item.value;
  }

  delete(key) {
    delete this.cache[key];
    this.emit("delete", key);
  }

  exists(key) {
    return key in this.cache;
  }

  _cleanup() {
    const now = Date.now();
    Object.keys(this.cache).forEach((key) => {
      if (now > this.cache[key].expiresAt) delete this.cache[key];
    });
  }
}

export const redisCache = new RedisCacheManager();
