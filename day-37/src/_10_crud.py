import click,json

@click.group()
def cli():
    pass
@cli.command(name="create",help="OPTIONS | Membuat data ke users.json")
@click.option('--gender', default=None, help='STRING | Data gender')
@click.option('--title', default=None, help='STRING | Data title')
@click.option('--first', default=None, help='STRING | Data nama awal')
@click.option('--last', default=None, help='STRING | Data nama akhir')
@click.option('--street', default=None, help='STRING | Data jalan')
@click.option('--city', default=None, help='STRING | Data kota')
@click.option('--state', default=None, help='STRING | Data provinsi')
@click.option('--postcode', default=None, help='STRING | Data postcode')
@click.option('--email', default=None, help='STRING | Data email')
@click.option('--phone', default=None, help='STRING | Data nohp')
@click.option('--cell', default=None, help='STRING | Data cell')

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


@cli.command(name="delete",help="INT | Delete data berdasar ID")
@click.argument("idx",type=click.INT)
def delete(idx):
    read = open("users.json", "r").read() # membuat file
    read = list(json.loads(read))
    read = list(filter(lambda item: int(item['id']) != int(idx),read ))

    f = open("users.json", "w")
    f.write(json.dumps(read,indent=4)) # menulis file \n = ganti baris
    f.close() # tutup

@cli.command(name="readid",help="INT | Read data berdasar ID")
@click.argument("idx",type=click.INT)
def readid(idx):
    read = open("users.json", "r").read() # membuat file
    read = list(json.loads(read))
    read = list(filter(lambda item: int(item['id']) == int(idx),read ))
    print(json.dumps(read,indent=4))

@cli.command(name="read",help="None | Read semua data")
def read():
    read = open("users.json", "r").read() # membuat file
    print(read)



if __name__ == "__main__":
    cli()