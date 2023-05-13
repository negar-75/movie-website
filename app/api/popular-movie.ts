import { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";
type Result = {
  data: string;
  type: string;
  latency: number;
};

let redis = new Redis(process.env.REDIS_URL as string);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let start = Date.now();
  const cacheKey = "popular_movies";
  let cache = await redis.get(cacheKey);
  cache = JSON.parse(cache as string);
  let result: Partial<Result> = {};
  if (cache) {
    console.log("loading from cache");
    result.data = cache;
    result.type = "redis";
    result.latency = Date.now() - start;
    return res.status(200).json(result);
  } else {
    console.log("loading from api");
    start = Date.now();
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
    )
      .then((r) => r.json())
      .then((data) => {
        result.data = data;
        result.type = "api";
        result.latency = Date.now() - start;
        redis.set(cacheKey, JSON.stringify(result.data), "EX", 60);
        return res.status(200).json(result);
      });
  }
}

export default handler;
