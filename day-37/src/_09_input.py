import click
import socket

@click.group()
def cli():
    pass

@cli.command(name="sum_prompt",help="INT | Menjumlahkan angka dari input prompt, akan berhenti ketika input prompt kosong")
@click.option('--num', prompt='Masukkan Angka (1) ',type=click.INT,
              help='INT | Angka yang akan dijumlahkan (prompt)')
def sum_prompt(num):
    angka = num
    total = int(num)
    i = 1
    while num != '' and angka != '':
        i+=1
        angka = input(f"Masukkan Angka ({i}) : ")
        if angka !='':
            total += int(angka)
        
    print("Hasil Penjumlahan:",total)

if __name__ == "__main__":
    cli()