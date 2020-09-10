import click
from src.weather import weather


@click.group()
def cli():
    pass

#1
cli.add_command(weather)


if __name__ == "__main__":
    cli()