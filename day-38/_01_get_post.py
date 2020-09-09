import aiohttp
import asyncio
import time
import json
from Fetch import Fetcher as fetcher


url = 'https://jsonplaceholder.typicode.com/posts'

async def fetch_url():
    start = time.time()
    print(f"started at {time.strftime('%X')}")

    
    html = await fetcher.get(url)
    html = json.loads(html)
    print("\n".join(list(map(lambda html: f"title :{html['title']}",html))))
    
    
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_url())