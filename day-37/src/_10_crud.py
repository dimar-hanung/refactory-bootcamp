import click,json

@click.group()
def cli():
    pass
@cli.command(name="add")
@click.option('--gender', default=False, help='Menentukan maks panjang huruf')
@click.option('--title', default=False, help='Menentukan maks panjang huruf')
@click.option('--first', default=False, help='Menentukan maks panjang huruf')
@click.option('--last', default=False, help='Menentukan maks panjang huruf')
@click.option('--street', default=False, help='Menentukan maks panjang huruf')
@click.option('--city', default=False, help='Menentukan maks panjang huruf')
@click.option('--state', default=False, help='Menentukan maks panjang huruf')
@click.option('--postcode', default=False, help='Menentukan maks panjang huruf')
@click.option('--email', default=False, help='Menentukan maks panjang huruf')
@click.option('--phone', default=False, help='Menentukan maks panjang huruf')
@click.option('--cell', default=False, help='Menentukan maks panjang huruf')

def add(gender,title,first,last,street,city,state,postcode,email,phone,cell):
    read = open("users.json", "r").read() # membuat file
    read = list(json.loads(read))
    users = {
    "id":len(read)
    "gender": gender,
    "name": {
        "title": title,
        "first": first,
        "last": last
    },
    "location": {
        "street": street,
        "city": city,
        "state": state,
        "postcode": postcode,
        "email": email,
        "phone": phone,
        "cell": cell
    }
    }
    
    read.append(users)
    f = open("users.json", "w")
    f.write(json.dumps(read,indent=4)) # menulis file \n = ganti baris
    f.close() # tutup


@cli.command(name="delete")
@click.argument("id",type=click.INT)



if __name__ == "__main__":
    cli()