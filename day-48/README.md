# Kubernetes
## Before Deadline
https://github.com/dimar-hanung/refactory-bootcamp/tree/a98f5ad/day-48

## Main Task
membuat sebuah aplikasi kubernates yang bisa di akses melalui
- [x] nodeport
- [x] loadbalancer
- [x] ingress
## Problem
- [x] Menambah Hosts Kubernetes pada windows

## How To Run
### nodeport.yaml
1. Buat Service
    ```bash
    kubectl create -f nodeport.yaml
    ```
2. Cek Status
    ```
    kubectl get all --show-labels
    ```
3. Cek IP Minikube
    ```
    minikube ip
    ```
    Karena saya menggunakan windows, dan saya mendapat ip `192.168.99.100` yang sudah di setting oleh saya sebelum nya di virtual box, maka cek service ada di ip tersebut
4. Cek Service\
Akses http://192.168.99.100:30001 pada browser

### loadbalancer.yaml
1. Buat Service
    ```bash
    kubectl create -f loadbalancer.yaml
    ```
2. Cek Status
    ```bash
    kubectl get all --show-labels
    ```
3. Cek IP Minikube
    ```
    minikube ip
    ```
4. Buka url sesuai port nya, ex :
    ```bash
    http://192.168.99.100:31675/
    ```

### ingress.yaml
1. Cek Ingress
    ```bash
    minikube addons list
    ```
2. Apabila belum aktif maka aktifkan
    ```bash
    minikube addons enable ingress
    ```
3. cek ingress-nginx-controller
    ```bash
    kubectl get pods --namespace kube-system
    ```
4. Buat Service
    ```bash
    kubectl create -f ingress.yaml
    ```
5. Untuk melihat proses sudah running atau belum
    ```bash
    kubectl get all --show-labels
    ```
6. Dapatkan info ingress
    ```bash
    kubectl get ingresses
    ```
7. Tambahkan Hosts
    - Tambahkan baris pada file hosts:
        ```bash
        192.168.99.100 nginx.dimar.local
        ```
    - Path file hosts Windows: 
        ```
        C:\Windows\System32\drivers\etc
        ```
    - Path file hosts Linux
        ```bash
        /etc/hosts
        ```
8. Buka nginx.dimar.local



## API Kubernetes
### Field yang dibutuhkan
Pada file .yaml untuk objek Kubernetes yang ingin kamu buat, kamu perlu menyediakan value untuk field-field berikut:
- `apiVersion`:  Version API Kubernetes mana yang kamu gunakan untuk membuat objek tersebut
- `kind`: Objek apakah yang ingin kamu buat
- `metadata`: Data yang dapat kamu gunakan untuk melakukan identifikasi objek termasuk name dalam betuk string, UID, dan namespace yang bersifat opsional
