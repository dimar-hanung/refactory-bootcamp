import click
import operator
from functools import reduce

@click.group()
def cli():
    pass
@cli.command(name="palindrome",help="STRING | mengetahi jika kalimat dibalik hasilnya sama")
@click.argument("text",type=click.STRING)
def palindrome(text):
    print("String:",text)
    text = text.lower()
    print(f"Is Palindrome? {'Yes' if text == text[::-1] else 'No'}")

if __name__ == "__main__":
    cli()