import click
from functools import reduce

@click.group()
def cli():
    pass
@cli.command(name="obfuscate",help="STRING | Mengubah string ke charcode")
@click.argument("text",type=click.STRING)
def obfuscate(text):
    text = list(text)
    print(''.join(list(map(lambda char: f"&#{ord(char)};",text))))

if __name__ == "__main__":
    cli()