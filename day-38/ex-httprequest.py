import aiohttp
import asyncio
import time
import requests

list_url = [
    "https://randomuser.me/api/?results=10000",
    "https://randomuser.me/api/?results=5",
    "http://httpbin.org/get",
    'https://jsonplaceholder.typicode.com/todos/1',
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
    "https://randomuser.me/api/?results=1",
]

def fetch_request(list_url):
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    for url in list_url:
        requests.get(url).status_code
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}")

# aiohttp.ClientSession.get()

async def fetch_aiohttp(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            print(resp.status)
            # print(await resp.text())

async def run_fetch_sync(list_url):
    start = time.time()
    print(f"started at {time.strftime('%X')}")

    for url in list_url:
        await fetch_aiohttp(url)

    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}")

async def run_fetch_async(list_url):
    start = time.time()
    print(f"started at {time.strftime('%X')}")

    list_task = []
    for url in list_url:
        task = asyncio.create_task(fetch_aiohttp(url))
        list_task.append(task)
    
    for task in list_task:
        await task

    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 


if __name__ == "__main__":
    # fetch_request(list_url)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_fetch_async(list_url))
