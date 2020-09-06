import urllib.request, json 

with urllib.request.urlopen("https://mul14.github.io/data/employees.json") as url:
    data = json.loads(url.read().decode())


def findAbsent(variable):
    def count(var): return int(var.split('-')[1]) == 10 and int(var.split('-')[0]) == 2019
    oktober = filter(count,variable['presence_list'])
    # print(list(oktober))
    return {"name":variable['first_name'],"absent":len(list(oktober))}

def mapSpesific(data,key):
    return list(map(lambda item: item[key] ,data))




richEmployee = filter(lambda item: int(item['salary']) > 15000000,data);
employeeLocation = filter(
    lambda item: list(map(
        lambda addr: [addr['label'],addr['city']] ,item['addresses']
        )).count(['home','DKI Jakarta']) > 0,data
    )

employeeApril = filter(lambda item: int(item['birthday'].split('-')[1]) == 4 ,data)
employeeDepart = filter(lambda item: item['department']['name'] == 'Research and development',data)
employeeAbsent = filter(None,map(findAbsent,data))


print(mapSpesific(richEmployee,'first_name'))
print(mapSpesific(employeeLocation,'first_name'))
print(mapSpesific(employeeApril,'first_name'))
print(mapSpesific(employeeDepart,'first_name'))
print(list(employeeAbsent))
