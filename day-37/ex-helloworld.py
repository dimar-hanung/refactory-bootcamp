import click

@click.command()
@click.argument("name",type=click.STRING)
@click.option('--city', default='kosong', help='Number of greetings.')
@click.option('--male',type=click.STRING, default=False,is_flag=True, help='Number of greetings.')
def hello(name,city,male):
    print("name:",name)
    print("city:",city)
    print("dia laki laki:",male)

# contoh manggil :
# python .\ex-helloworld.py dimar --city purwokerto --male

if __name__ == '__main__':
    hello()