import click
import statistics

@click.group()
def cli():
    pass
@cli.command(name="mean")
@click.argument("number",type=click.INT,nargs= -1)
def mean(number):
    print(statistics.mean(number))

@cli.command(name="median")
@click.argument("number",type=click.INT,nargs= -1)
def median (number):
    print(statistics.median(number))

@cli.command(name="mode")
@click.argument("number",type=click.INT,nargs= -1)
def mode(number):
    print(statistics.mode(number))

@cli.command(name="fmean")
@click.argument("number",nargs= -1)
def fmean(number):
    print(statistics.fmean(number))


if __name__ == "__main__":
    cli()