# Static Page dengan Express

## folder
1. basic -> Latihan basic secara mandiri
1. todo-app -> Tugas Harian

## Express
merupakan sebuah library yang memudahkan dalam pengelolaan server side di Node JS.
Express menerapkan konsep MVC juga, dengan express kita bisa menerapkan RESTful 


##	Package yang membantu Express
Setup beberapa package yang akan membantu kita dalam membangun server,
1. body-parser
1. nodemon \
nodemon digunakan untuk restart server otomatis saat melakukan perubahan pada code, nodemon ini dibutuhkan saat dalam mode development saja
1. dotenv \
.env adalah pengaman autentikasi, .env ini seharusnya tidak diupload ke github karena sifat nya rahasia, contoh isi dari .env adalah username, password database, dll, supaya orang tidak tahu
1. ejs \
adalah salah satu view engine express, selain ejs ada juga package yang terkenal bernama pug js
1. express generator \
untuk membuat struktur folder sesuai standar yang ada

##	Istilah Istilah dalam server
1. Middleware \
adalah sebuah layer yang dieksekusi sebelum ke main system atau middleware selanjutnya, middleware juga dipergunakan untuk melakukan validasi terhadap request dari user dan mengubah object request atau response.
1. Logging \
Logging merupakan pencatatan pada setiap request yang dilakukan oleh client.
Melakukan logging bisa dengan menggunakan banyak cara bisa berupa console.log, namun hal tersebut tidak bisa terlihat ketika sudah masuk production. Contoh library untuk logging adalah winston
1. Routing \
Routing mengacu pada letak akhir dari sebuah endpoint yang direquest oleh client. Maksudnya 
