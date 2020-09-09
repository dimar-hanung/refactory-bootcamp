import asyncio
import time

# def install():
#     # process installing
#     time.sleep(3)
#     print("Install Success!!")

# def download():
#     time.sleep(5)
#     print("Download Done!")

# def run_task():
#     install()
#     download()
#     print("Run task complete!")

# if __name__ == "__main__":
#     run_task()

# coroutine -> async - await di python

# fucntion coroutine atau object coroutine
async def install():
    # process installing
    # await time.sleep(3)
    await asyncio.sleep(3)
    print("Install Success!!")

async def download():
    await asyncio.sleep(5)
    print("Download Done!")

# menjalankan coroutine secara sync
async def run_task():
    start = time.time()
    print(f"started at {time.strftime('%X')}")

    await install()
    await download()
    print("Run task complete!")
    
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}")

# asyncio.run(install())
# asyncio.run(download())

def install1() :
    print("install")

def download1() :
    print("download")

# menjalankan coroutine secara async concurrently = berjalan bareng
async def run_task_async():
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    
    # 1. gather
    # await asyncio.gather(
    #     install(),
    #     download(),
    # )

    # 2. task
    installing = asyncio.create_task()
    downloading = asyncio.create_task()

    # print(install1)

    await installing
    await downloading

    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}")

# future

def install():
    print("install success")



if __name__ == "__main__":
    # run_task()
    # asyncio.run(install())
    # await install()
    # asyncio.run(run_task())
    # asyncio.run(run_task_async())

    # loop = asyncio.get_event_loop()
    # loop.run_until_complete(install())
    # loop.close()
