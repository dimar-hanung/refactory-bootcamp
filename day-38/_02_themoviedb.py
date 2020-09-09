import aiohttp
import asyncio
import time
import json
from Fetch import Fetcher as fetcher


async def fetch_url():
    start = time.time()
    print(f"started at {time.strftime('%X')}")

    keanu = json.loads(await fetcher.get('https://api.themoviedb.org/3/person/6384/tv_credits?api_key=ccf0985bab358ff38955fce7695ea467&language=en-US'))
    make_file(keanu,"get_moviedb_001.json")
    print(f"Keanu Success at {time.strftime('%X')}")
    robert = json.loads(await fetcher.get('https://api.themoviedb.org/3/person/3223/tv_credits?api_key=ccf0985bab358ff38955fce7695ea467&language=en-US'))
    make_file(robert,"get_moviedb_002.json")
    print(f"Robert Success at {time.strftime('%X')}")
    tom = json.loads(await fetcher.get('https://api.themoviedb.org/3/person/1136406/tv_credits?api_key=ccf0985bab358ff38955fce7695ea467&language=en-US'))
    make_file(tom,"get_moviedb_003.json")
    print(f"Tom Success {time.strftime('%X')}")
    

    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}") 


def make_file(data,filename='data.json'):
    f = open(filename, "w") # membuat file
    f.write(json.dumps(data,indent = 4)) # menulis file \n = ganti baris
    f.close() # tutup

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_url())