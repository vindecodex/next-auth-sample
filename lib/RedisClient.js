import Redis from 'ioredis';

const RedisClient = new Redis({
  port: 6379,
  host: 'localhost',
  db: 5
});

export default RedisClient;
