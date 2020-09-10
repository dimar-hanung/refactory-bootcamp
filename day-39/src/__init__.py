import click
from src.weather import weather,forecast


@click.group()
def cli():
    pass

#1
cli.add_command(weather)
cli.add_command(forecast)


if __name__ == "__main__":
    cli()