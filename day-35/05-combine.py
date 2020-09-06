import urllib.request, json

with urllib.request.urlopen("https://jsonplaceholder.typicode.com/posts") as url:
    posts = json.loads(url.read().decode())

with urllib.request.urlopen("https://jsonplaceholder.typicode.com/users") as url:
    users = json.loads(url.read().decode())

def user(id):
    return list(filter(lambda a: a['id'] == id, users))[0]

for post in posts:
    post['user'] = user(post['userId'])
    print(json.dumps(post, indent=1))
