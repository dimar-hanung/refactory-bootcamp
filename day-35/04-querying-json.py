import urllib.request, json 

def findRich(variable):
    # print(variable['salary'])
    if (int(variable['salary']) > 1500000): 
        return variable['first_name']
    else: 
        return

def findLocation(variable):
    def Alamat(var): return var['city']
    alamat = list(map(Alamat,variable['addresses']))
    if 'DKI Jakarta' in alamat: 
        return variable['first_name']
    else: 
        return
def findMonth(variable):
    april = int(variable['birthday'].split('-')[1]) == 4
    return variable['first_name'] if april else False
def findDepart(variable):
    if variable['department']['name'] == 'Research and development':
        return variable['first_name']
def findAbsent(variable):
    def count(var): return int(var.split('-')[1]) == 10 and int(var.split('-')[0]) == 2019
    oktober = filter(count,variable['presence_list'])
    # print(list(oktober))
    return {"name":variable['first_name'],"absent":len(list(oktober))}

with urllib.request.urlopen("https://mul14.github.io/data/employees.json") as url:
    data = json.loads(url.read().decode())
    # print(data[0]['id'])


richEmployee = filter(None,map(findRich,data))
employeeLocation = filter(None,map(findLocation,data))
employeeApril = filter(None,map(findMonth,data))
employeeDepart = filter(None,map(findDepart,data))
employeeAbsent = filter(None,map(findAbsent,data))


# print(",".join(list(richEmployee)))
# print(",".join(list(employeeLocation)))
# print(",".join(list(employeeApril)))
# print(",".join(list(employeeDepart)))
print(list(employeeAbsent))
