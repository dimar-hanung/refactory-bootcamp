# searching-apps
## demo
https://dimar-vue-cli.web.app

## Main Task
- [x] Menambah Selected Item
- [x] Selcted Item pada daftar pencarian terhapus saat item di select

## How to run
- npm install
- npm run serve

## Vue Components
Sifat dari component adalah reusable , jadi bisa digunakan secara berulang, kita bisa menggunakan component sebagai custom element dalam vue js, component digunakan untuk bagian bagian yang lebih kecil seperti sidebar, navbar, widget, dan apapun itu, dalam standart skala component tidak lebih besar dari 1 buah halaman / pages

## Vue Slot
Digunakan untuk assign text / apapun itu pada components , sebagai contoh :
```html
<custom-element> Isi </custom-elemen>
```
Apabila tanpa menggunakan slot maka apa yang ada di innerHTML tersebut tidak akan tampil, namun Ketika menggunakan slot maka akan tampil isi dari innerHTML teresebut, \
Referensi link :
- https://vuejs.org/v2/guide/components-slots.html
- https://www.youtube.com/watch?v=F44OoFk8spg

## Vue Props
Props digunakan untuk kirim data dari parent component ke child component , bersifat reactive juga, penedefinisian props bisa dengan array maupun objek Ketika kita ingin memberikan opsi seperti required, type dan lain nya, props dihubungkan dengan menggunakan v-bind \
Referensi link: 
- https://www.youtube.com/watch?v=W2j7CjQI2y4

## Vue Emit
Kalau props adalah mengirim data dari parent ke child ,maka dengan menggunakan emit kita dapat mengirim data dari child ke parent, menggunakan event, \
Referemsi link:
- https://www.youtube.com/watch?v=5pvG6fzkdFM

## Dynamic Content
Maksudnya Ketika kita memiliki 2 buah form, sebenarnya kita hanya perlu membuat 1 component (tidak perlu 2 komponen), maka dari itu component tersebut bersifat dinamis. \
Referensi link: 
- https://www.youtube.com/watch?v=09n2945JW_0
