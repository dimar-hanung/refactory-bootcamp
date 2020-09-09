import aiohttp
import asyncio
import time
import json
from Fetch import Fetcher as fetcher


url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

async def fetch_url():
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    html = await fetcher.get('https://httpbin.org/get')
    html2 = await fetcher.delete('https://httpbin.org/delete')
    jsonData ={
    "id": "30",
    "name": "Someone"
    }
    html3 = await fetcher.post('https://httpbin.org/post',jsonData)
    # html = json.loads(html)
    # html2 = json.loads(html2)
    print(html3)
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_url())