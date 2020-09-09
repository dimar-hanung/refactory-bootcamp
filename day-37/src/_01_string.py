import click

@click.group()
def cli():
    pass
@cli.command(name="lowercase",help="STRING | Mengubah semua huruf menjadi lowercase")
@click.argument("text",type=click.STRING)
def lowercase(text):
    print(text.lower())

@cli.command(name="uppercase",help="STRING | Mengubah semua huruf menjadi uppercase")
@click.argument("text",type=click.STRING)
def uppercase(text):
    print(text.upper())

@cli.command(name="capitalize",help="STRING | Mengubah awal huruf di setiap kata menjadi kapital")
@click.argument("text",type=click.STRING)
def capitalize(text):
    print(text.title())

if __name__ == "__main__":
    cli()