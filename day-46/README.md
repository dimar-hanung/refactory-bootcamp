# Kubernetes
## Apa itu
- Kubernetes sudah terkenal ✅
- Kubernetes adalah platform open-source ✅
- Kubernetes dan docker bisa berhubungan? ya berhubungan ✅
- Kubernetes dan container berhubungan? ya berhubungan ✅
- Kubernetes harus berhubungan dengan Docker? tidak ❌, kubernetes mengelola container dan platform container itu tidak hanya docker, ada banyak platform container yang bisa dikelola dengan kubernetes.
- Kubernetes itu Untuk Memanajemen aplikasi yang berbasis container 🔧, jadi anggap aja kubernetes itu parent nya dari container, tapi tidak hanya membungkus container tapi juga memanajemen workloads dan service dari container tersebut 🔧
- Kubenetes memiliki singkatan, yaitu `k8s`, diambil dari k`ubernete`s, paham? 😄

## Misal
- Dalam mode production kamu perlu menjaga container agar selalu up dan tidak down, contoh jika container mu down kamu harus punya backup container yang harus dijalankan (start), ini akan sulit kalau di handle oleh system biasa 😢
- Makanya kubernetes hadir untuk menyalamat kan kita 😄
- Kubernetes mengelola scalling (scalable) dan failover dari aplikasi container kamu, termasuk deployment patterns dll.

## Komponen Kubernetes
<img src="https://d33wubrfki0l68.cloudfront.net/2475489eaf20163ec0f54ddc1d92aa8d4c87c96b/e7c81/images/docs/components-of-kubernetes.svg" width="500">

### Control Plane Components
- kube-apiserver 
- etcd 
- kube-scheduler 
- kube-controller-manager 
- cloud-controller-manager 

### Node Components
<img src="https://d33wubrfki0l68.cloudfront.net/5cb72d407cbe2755e581b6de757e0d81760d5b86/a9df9/docs/tutorials/kubernetes-basics/public/images/module_03_nodes.svg" width="500" >

- Sebuah Pod selalu berjalan dalam sebuah Node.\
- ❗ Pod menjalankan satu kontainer. Model satu kontainer per Pod adalah model yang umum digunakan di Kubernetes; kamu dapat membayangkan sebuah Pod sebagai pembungkus kontainer tersebut, dan Kubernetes tidak mengelola kontainer secara langsung tetapi mengelola Pod tersebut.
Tiap Node Kuberbetes menjalankan setidaknya:\
- Kubelet, satu proses yang bertanggung jawab untuk berkomunikasi antara control plane Kuberneter dan Node; ini juga mengelola Pod-Pod dan kontainer-kontainer yang berjalan di sebuah mesin.
- Satu container runtime, seperti Docker, bertanggung jawab untuk menarik image kontainer dari register, membuka kontainer, dan menjalankan aplikasi.

Komponen Node :
- kubelet 
- kube-proxy 
- Container runtime 
### Addons
- DNS 
- Web UI (Dashboard) 
- Container Resource Monitoring 
- Cluster-level Logging 

