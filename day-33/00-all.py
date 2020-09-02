
## 01. Combine Lists

def combine_lists():
    first = ['Behind', 'every', 'great', 'man']
    second = ['is', 'a', 'woman']
    third = ['rolling', 'her', 'eyes']
    joinedlist = first + second
    print(" ".join(joinedlist))
# combine_lists()



## 02. Merge Lists
## Referensi : https://www.geeksforgeeks.org/python-convert-two-lists-into-a-dictionary/
def merge_lists():
    menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"] # List A
    menus.sort()
    price = [15,10,12,20,30] # List B
    price.sort()
    res = dict(zip(menus, price)) 
    print(res)

# merge_lists()


## 03. Char Counter
## Referensi : https://www.tutorialspoint.com/count-words-in-a-sentence-in-python-program
def char_counter(text):
    all_freq = {} 
    text = text.lower()
    for i in text: 
        if i in all_freq: 
            all_freq[i] += '*'
        else: 
            all_freq[i] = '*'
    print(all_freq)

# char_counter("Mammals")
# char_counter("Bruiser build")

## 04. Bubble Sort
def bubble_sort(val):
    step = 0;
    for passnum in range(len(val)-1,0,-1):
        for i in range(passnum):
            if val[i]>val[i+1]:
                if(i > 0):
                    step+=1
                    print(f'Step {step} : ',val)
                temp = val[i]
                val[i] = val[i+1]
                val[i+1] = temp
# bubble_sort([12,3,5,4,8,9])

## 05. Masking
def masking(text):
    text = list(text)
    result = '';
    # print(len(text))
    for i in range(len(text)):
        # print(len(text) - i)
        if len(text) - i >3:
            result += '*'
        else:
            result += text[i]
    print(result)
# masking("23dn3ir30fd2eddd")

## 06. Missing Letter
import string
def missing_letter(text):
    text = [x.lower() for x in text]
    word = list(string.ascii_lowercase)
    result = ''
    for i in range(len(text) - 1):
        temp = word.index(text[i]) + 1
        # print(text[i + 1] == word[temp])
        # print(text[i],word[temp])
        if text[i + 1] != word[temp]:
            print(word[temp])
       

# missing_letter(["c","d","e","g","h"])
# missing_letter(["X","Z"])

## 07. Sorting Odd Numbers
def sort_odd(numbers):
    a = numbers
    b = sorted([item for item in a if item%2 != 0])
    odd_int = 0
    for i in range(len(a)):
        if a[i] %2 != 0:
            a[i] = b[odd_int]
            odd_int += 1
    print(a)

numbers = [9,4,2,4,1,5,3,0]
sort_odd(numbers)