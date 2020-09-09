import aiohttp
import asyncio
import time
import json
from Fetch import Fetcher as fetcher


async def fetch_url():
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    posts = await fetcher.get('https://jsonplaceholder.typicode.com/posts')
    posts = json.loads(posts)
    users = await fetcher.get('https://jsonplaceholder.typicode.com/users')
    users = json.loads(users)
    # print(list(filter(lambda html: html['category'] == 'fruits',html)))
   

    def user(id):
        return list(filter(lambda a: a['id'] == id, users))[0]

    for post in posts:
        post['user'] = user(post['userId'])
        print(json.dumps(post, indent=4))

    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_url())