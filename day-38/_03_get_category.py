import aiohttp
import asyncio
import time
import json
from Fetch import Fetcher as fetcher


url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

async def fetch_url():
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    html = await fetcher.get(url)
    html = json.loads(html)
    # print(list(filter(lambda html: html['category'] == 'fruits',html)))
    print("\n".join(list(map(lambda data: data['name'],filter(lambda html: html['category'] == 'fruits',html)))))
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_url())