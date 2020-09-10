import click,aiohttp,asyncio,time,json,os
from dotenv import load_dotenv
load_dotenv(verbose=True)
from datetime import datetime
from src.Fetch import Fetcher as fetcher
from src.optionsAll import OptionEatAll
from functools import wraps

def coro(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        return asyncio.run(f(*args, **kwargs))

    return wrapper

base = os.getenv('BASE_URL')
token = f"appid={os.getenv('TOKEN')}&"
@click.group()
def cli():
    pass
@cli.command(name="weather",help="STRING | Mencari cuaca berdasar nama kota")
@click.argument("city",default=False,type=click.STRING)
@click.option('--celcius',default=False,is_flag=True,type=click.BOOL, help='Temperatur Celcius')
@click.option('--fahrenheit',default=False,is_flag=True,type=click.BOOL, help='Temperatur Fahrenheit ')
@click.option('--kelvin',default=False,is_flag=True,type=click.BOOL, help='Temperatur Kelvin')
@click.option('--temp',default=False,is_flag=True,type=click.BOOL, help='Hanya Menampilkan Temperatur dan cuaca')
# @click.option('--cities',default=False,multiple=True, help='menampilkan banyak city')
@click.option('--cities', cls=OptionEatAll)
@coro
async def weather(city,celcius,fahrenheit,kelvin,temp,cities):
    units = ["metric","° Celcius"] if celcius else ["imperial","° Fahrenheit"] if fahrenheit else [None,"° Kelvin"]
    custom_temp = [f"units={units[0]}" if units[0] else None,units[1]]

    if cities:
        print(datetime.now().strftime("%A, %B %d, %Y %H:%M:%S %p"))
        for city in cities:
            data = json.loads(await fetcher.get(f"{base}q={city.lower()}&{token}{custom_temp[0]}"))
            print("----------------------------------------------")
            if data['cod'] != '404':
                temperature = f"{data['weather'][0]['main']}, {data['weather'][0]['description']}"
                # Supaya tab sejajar
                tab = [f"{data['name']}", f"| {data['main']['temp']}{custom_temp[1]}",f" | {temperature}"]
                print('{:<15} {:<15}'.format(tab[0], tab[1]),tab[2])
                # print(f"{data['name']} | {data['main']['temp']}{custom_temp[1]}")
            else:
                print(f"Kota {city} tidak tersedia dalam database")
        return
    # start = time.time()
    # print(f"started at {time.strftime('%X')}")
    
    
    html = await fetcher.get(f"{base}q={city.lower()}&{token}{custom_temp[0]}")
    html = json.loads(html)
    if html['cod'] != "404":
        date = datetime.fromtimestamp(html['dt']).strftime("%A, %B %d, %Y %H:%M:%S %p")
        temperature = f"{html['weather'][0]['main']}, {html['weather'][0]['description']}"
        if temp:
            print(date)
            print("----------------------------------------------")
            print(temperature)
        else:
            sunrise = datetime.fromtimestamp(html['sys']['sunrise']).strftime("%A, %B %d, %Y %H:%M:%S %p")
            sunset = datetime.fromtimestamp(html['sys']['sunset']).strftime("%A, %B %d, %Y %H:%M:%S %p")
            readable = []
            readable.append(f"datetime\t: {date}")
            readable.append(f"city\t\t: {html['name']}")
            readable.append(f"temperature\t: {html['main']['temp']}{custom_temp[1]}")
            readable.append(f"weather\t\t: {temperature}")
            readable.append(f"sunrise\t\t: {sunrise}")
            readable.append(f"sunset\t\t: {sunset}")
            print("\n".join(readable))

        end = time.time()
        # print(f"finished at {time.strftime('%X')}")
        # print(f"total time execution : {round(int(end - start))}")
    else:
        print(f"Kota {city} Tidak Ditemukan :D")



if __name__ == "__main__":
    cli()