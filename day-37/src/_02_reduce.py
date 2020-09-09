import click
from functools import reduce

@click.group()
def cli():
    pass
@cli.command(name="add",help="INT | Menjumlahakan list angka")
@click.argument("number",type=click.INT,nargs= -1)
def add(number):
    print(reduce(lambda a,b : a + b,number))

@cli.command(name="subtract",help="INT | Mengurangi list angka")
@click.argument("number",type=click.INT,nargs= -1)
def subtract (number):
    print(reduce(lambda a,b : a - b,number))

@cli.command(name="multiply",help="INT | Mengalikan list angka")
@click.argument("number",type=click.INT,nargs= -1)
def multiply(number):
    print(reduce(lambda a,b : a * b,number))

@cli.command(name="divide",help="INT | Membagi list angka")
@click.argument("number",type=click.INT,nargs= -1)
def divide(number):
    print(reduce(lambda a,b : a + b,number))


if __name__ == "__main__":
    cli()