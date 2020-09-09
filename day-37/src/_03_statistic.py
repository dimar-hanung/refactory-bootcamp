import click
import statistics

@click.group()
def cli():
    pass
@cli.command(name="mean",help="INT | Rata Rata")
@click.argument("number",type=click.INT,nargs= -1)
def mean(number):
    print(statistics.mean(number))

@cli.command(name="median",help="INT | Nilai Tengah")
@click.argument("number",type=click.INT,nargs= -1)
def median (number):
    print(statistics.median(number))

@cli.command(name="mode",help="INT | Frequensi Tertinggi")
@click.argument("number",type=click.INT,nargs= -1)
def mode(number):
    print(statistics.mode(number))

@cli.command(name="fmean",help="INT | ")
@click.argument("number",type=click.INT,nargs= -1)
def fmean(number):
    print("fmean tidak ditemukan di dalam statistik")
    print(dir(statistics))


if __name__ == "__main__":
    cli()