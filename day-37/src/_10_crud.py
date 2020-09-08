import click,json

@click.group()
def cli():
    pass
@cli.command(name="create")
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

def create(gender,title,first,last,street,city,state,postcode,email,phone,cell):
    read = open("users.json", "r").read() # membuat file
    read = list(json.loads(read))
    users = {
    "id":read[len(read) - 1]["id"] + 1 if len(read) > 0 else 1,
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
    read = list(read)
    read.append(users)
    f = open("users.json", "w")
    f.write(json.dumps(read,indent=4)) # menulis file \n = ganti baris
    f.close() # tutup


@cli.command(name="delete")
@click.argument("idx",type=click.INT)
def delete(idx):
    read = open("../users.json", "r").read() # membuat file
    read = list(json.loads(read))
    read = list(filter(lambda item: int(item['id']) != int(idx),read ))

    f = open("../users.json", "w")
    f.write(json.dumps(read,indent=4)) # menulis file \n = ganti baris
    f.close() # tutup

@cli.command(name="readid")
@click.argument("idx",type=click.INT)
def readid(idx):
    read = open("../users.json", "r").read() # membuat file
    read = list(json.loads(read))
    read = list(filter(lambda item: int(item['id']) == int(idx),read ))
    print(json.dumps(read,indent=4))

@cli.command(name="read")
def read():
    read = open("../users.json", "r").read() # membuat file
    print(read)



if __name__ == "__main__":
    cli()