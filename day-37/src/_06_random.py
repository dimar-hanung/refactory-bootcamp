import click
import random
@click.group()
def cli():
    pass
@cli.command(name="strrand",help="None | Membuat huruf acak")
@click.option('--length', default=5, help='Menentukan maks panjang huruf')
@click.option('--letters',default=False,is_flag=True,type=click.BOOL, help='Hanya random huruf')
@click.option('--uppercase',default=False,is_flag=True,type=click.BOOL, help='Mengubah ke random uppercase')
@click.option('--lowercase',default=False,is_flag=True,type=click.BOOL, help='Mengubah ke random lowercase')
@click.option('--numbers',default=False,is_flag=True,type=click.BOOL, help='Hanya random angka')
def strrand(length,letters,numbers,uppercase,lowercase):
    char = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    num = list("1234567890")
    print(type(letters))
    output = ''
    for i, rand in enumerate(char):
        charnum = list([char,num])
        select = random.randrange(0,2)
        if numbers == True:
            select = 1
        if letters == True:
            select = 0
        # print(charnum)
        output+=charnum[select][random.randrange(0, len(charnum[select]), 3)]
        
        if i == length:
            break

    
    if uppercase == True:
        output = output.upper()
    if lowercase == True:
        output = output.lower()
    # if number == False
    print(output)
    print(length)

if __name__ == "__main__":
    cli()