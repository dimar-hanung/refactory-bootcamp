import click

@click.group()
def cli():
    pass
@cli.command(name="lowercase")
@click.argument("text",type=click.STRING)
def lowercase(text):
    print(text.lower())

@cli.command(name="uppercase")
@click.argument("text",type=click.STRING)
def uppercase(text):
    print(text.upper())

@cli.command(name="capitalize")
@click.argument("text",type=click.STRING)
def capitalize(text):
    print(text.title())

if __name__ == "__main__":
    cli()