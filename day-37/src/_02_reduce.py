import click
import operator
from functools import reduce

@click.group()
def cli():
    pass
@cli.command(name="add")
@click.argument("number",type=click.INT,nargs= -1)
def add(number):
    print(reduce(lambda a,b : a + b,number))

@cli.command(name="subtract")
@click.argument("number",type=click.INT,nargs= -1)
def subtract (number):
    print(reduce(lambda a,b : a - b,number))

@cli.command(name="multiply")
@click.argument("number",type=click.INT,nargs= -1)
def multiply(number):
    print(reduce(lambda a,b : a * b,number))

@cli.command(name="divide")
@click.argument("number",type=click.INT,nargs= -1)
def divide(number):
    print(reduce(lambda a,b : a + b,number))


if __name__ == "__main__":
    cli()