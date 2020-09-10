import json
import asyncio
import aiohttp

class Fetcher:
    @staticmethod
    async def get(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as resp:
                return await resp.text()
    @staticmethod
    async def delete(url):
        async with aiohttp.ClientSession() as session:
            async with session.delete(url) as resp:
                return await resp.text()
    @staticmethod
    async def post(url,param):
        async with aiohttp.ClientSession() as session:
            async with session.post(url,param) as resp:
                return await resp.text()