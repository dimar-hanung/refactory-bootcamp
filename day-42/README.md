# Docker Images
## MainTask
- [x] Dockerfile : Masih sangat simple, hanya menggunakan nginx:alpine sebagai web server
- [x] Link Repo Docker Hub : https://hub.docker.com/repository/docker/dimarhanung/web-profile
            
## How to run
1. Pull :
    ```
    docker pull dimarhanung/web-profile:v1
    ```

1. Container run  sample :
    ```
    docker container run -d -p 3535:80 --name testingweb dimarhanung/web-profile:v1
    ```
1. Buka pada port 3535

## Referensi :
- https://dimar-hanung.github.io/pelajaran/pakYogi/docker.html
- https://docs.docker.com/
- https://labs.play-with-docker.com/

