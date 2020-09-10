import click
from src.weather import weather,forecast,dailyforecast


@click.group()
def cli():
    pass

#1
cli.add_command(weather)
cli.add_command(forecast)
cli.add_command(dailyforecast)


if __name__ == "__main__":
    cli()