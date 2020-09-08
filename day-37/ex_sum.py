import click
import operator
from functools import reduce

@click.group()
def cli():
    pass
@cli.command(name="count")
@click.argument("number",type=click.INT,nargs= -1)
@click.option('--op', default='+', help='aritmathic operator')
def count(number,op):
    ops = {
    "+": operator.add,
    "-": operator.sub,
    "*": operator.mul,
    }   
    print(reduce(lambda a,b : ops[op](a,b),number))

if __name__ == "__main__":
    cli()