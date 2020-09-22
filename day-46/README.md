# Kubernetes
## Apa itu
- Kubernetes sudah terkenal ✅
- Kubernetes adalah platform open-source ✅
- Kubernetes dan docker bisa berhubungan? ya berhubungan ✅
- Kubernetes dan container berhubungan? ya berhubungan ✅
- Kubernetes harus berhubungan dengan Docker? tidak ❌, kubernetes mengelola container dan platform container itu tidak hanya docker, ada banyak platform container yang bisa dikelola dengan kubernetes
- Untuk Memanajemen aplikasi yang berbasis container 🔧, jadi anggap aja kubernetes itu parent nya dari container, tapi tidak hanya membungkus container tapi juga memanajemen workloads dan service dari container tersebut 🔧

## Misal
- Dalam mode production kamu perlu menjaga container agar selalu up dan tidak down, contoh jika container mu down kamu harus punya backup container yang harus dijalankan (start), ini akan sulit kalau di handle oleh system biasa 😢
- Makanya kubernetes hadir untuk menyalamat kan kita 😄
- Kubernetes mengelola scalling (scalable) dan failover dari aplikasi container kamu, termasuk deployment patterns dll