import urllib.request
import click

@click.group()
def cli():
    pass
@cli.command(name="ip_eks")
def ip_eks():
    external_ip = urllib.request.urlopen('https://ident.me').read().decode('utf8')
    print(external_ip)
    # print(socket.gethostbyname(hostname))

if __name__ == "__main__":
    cli()