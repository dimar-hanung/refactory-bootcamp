# Docker Network
## Main Task
- [x] buat container untuk mysql server
- [x] Buat container untuk Backend - simple wms
- [x] Buat container untuk frontend vuex yang temen-temen buat sendiri/ task TO part 2
- [x] buat docker network tiap container
- [x] kirim link repo project BE yang sudah include dockerfile dan dockerhub link
- [ ] submit dockerfile untuk container database ke github dan buat docker hubnya
- [x] kirim link repo project FE yang sudah include dockerfile dan dockerhub link

## Problem 
- [ ] no space left
    ```bash
    failed to register layer: Error processing tar file(exit status 1): write /usr/lib/python3.5/lib-dynload/_codecs_kr.cpython-35m-x86_64-linux-gnu.so: no space left on device
    ```


## Membuat MYSQL Container
1. Membuat Container
    ```bash
    docker container run --name database-mysql -e MYSQL_ROOT_PASSWORD=dimar -d mysql
    ```
1. cek apakah container sudah berjalan
    ```bash
    docker container ls
    ```
    contoh output:
    ```bash
    CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                    NAMES
    0fad40c9c595        mysql                     "docker-entrypoint.s…"   7 minutes ago       Up 7 minutes        3306/tcp, 33060/tcp      database-mysql
    f28f6271e890        mprambadi/hello-vue:1.0   "/docker-entrypoint.…"   8 hours ago         Up 8 hours          0.0.0.0:8080->80/tcp     vue-baru
    ```
    disitu sudah terdapat container dengan nama `database-mysql`

1. Membuat database (masuk exec) ada 2 cara\
    ### bisa masuk langsung dengan `exec`
    ```bash
    docker exec -it database-mysql mysql -u root -p
    ```
    ### atau masuk melalui bash
    ```bash
    docker exec -it database-mysql bash
    ```
    ```
    root@0fad40c9c595:/# mysql -u root -p
    ```
1. setelah masuk exec tinggal Membuat database
    ```sql
    CREATE DATABASE db_name;
    ```

## Membuat Images Bakcend wms
1. Dockerfile
    ```Dockerfile
    FROM node:latest
    WORKDIR /usr/src/app
    COPY package.json .
    RUN npm install
    COPY . ./
    RUN echo "mulai"
    ENV PORT=3000
    ENV SECRET=Rahasia
    ENV GMAIL_USERNAME=example@gmail.com
    ENV GMAIL_PASSWORD=passwordnya123beneran
    ENV DB_USERNAME=root
    ENV DB_PASSWORD=dimar
    ENV DB_HOST=172.19.0.2
    ENV DB_NAME=rf_wms
    RUN npx sequelize-cli db:migrate
    RUN echo "sukses"

    COPY --chown=node:node . .
    EXPOSE 3000
    CMD [ "node", "app.js" ]
    # EXPOSE 8080
    # CMD [ “node”, “app.js” ]

    ```
1. konekan
    ```bash
    docker network connect netwms database-mysql
    ```

1. cek inspect
    ```bash
    docker container inspect database-mysql
    ```

1. buld
    ```bash
    docker build --network netwms -t backendwms:v6 .
    ```
1. buat container 
    ```bash
    docker container run -d -p 3535:3000 --name backend backendwms:v6
    ```

## Membuat Images FE wms
1. Build
    ```bash
    docker build -t fewms:v1 .
    ```
