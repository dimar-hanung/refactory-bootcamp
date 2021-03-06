const welcome = ()=>{
    return /*html*/`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="assets/js/qrcode.min.js"></script>

    <style id="printStyle">
      * {
        margin: 0px;
        font-family: calibri;
        -webkit-print-color-adjust: exact;
      }
      .cv {
        width: 21cm;
        height: 297mm;
        border: solid #ccc 1px;
        background-color: #dfdfdf;
        /* padding: 10px; */
        /* border-radius: 10px; */
        position: relative;
        display: flex;
      }

      .sidebar-left {
        height: 100%;
        /* width: 100%; */
        min-width: 300px;
        color:#fff;
        background-color: #32353a;
        box-shadow: 0px 0px 15px -5px;
      }

      .top-left-box {
        /* position: relative;
        top: 0px;
        left: 0px;
        background-color: #17a2b8;
        height: 50px; */
        /* width: 250px; */
      }

      .name-box{
        background: url(assets/img/dimar-rez.jpg);
        background-size:cover;
        margin: auto;
        width: 100%;
        height: 350px;
        border-radius: 5px;
        position: relative;
        filter: drop-shadow(0px 0px 1.5px black);
      }

      .absolute-bottom{
          position: absolute;
          bottom: 0px;
          width: 100%;
          text-align: center;
          color: #fff;
          background: #1d2223c2;
      }

      .name {
        /* padding: 0px 10px; */
        /* border-left: solid 1px #244061; */
        font-size: 20px;
        position: relative;
        bottom: 0px;
        padding: 5px 0px;
        text-align: center;
        width: 100%;
        font-weight: 1000;
        font-family: arial black;
        /* text-shadow: 20px 0 #000; */
      }

      .posisi{

        width: 100%;
        position: relative;
        /* bottom: -25px; */
        right: 0px;
        padding-bottom: 10px;
        border-radius: 0px 0px 5px 5px;
        /* padding: 5px 22px; */
      }

      .photo-profile {
        max-width: 200px;
        max-height: 200px;
        margin: 15px auto;
        margin-bottom: 50px;
        display: block;
        /* filter: blur(5px); */
        /* transform: rotate(180deg); */
      }
      .blur {
        /* filter: blur(5px); */
      }

      .sidebar-detail {
        margin: 0px 10px;
        padding: 25px;
      }
      .title
      {
        font-size: 28px;
        text-transform: uppercase;
        position: relative;
        font-weight: 1000;
        color: #49b5cc;
        border-bottom: solid 1px #fff;
        padding-bottom: 5px;
      }
      .content .title {
          color:#191919;
          border-bottom: solid 1px #191919;
      }

      .title::before{
        content: '';
        background: #fff;
        width: 100px;
        height: 3px;
        bottom:0px;
        left: 0px;
        border-radius: 0px 0px 0px 0px;
        position: absolute;
      }
      .content .title::before{
          background: #000;
      }
      
      .detail {
        font-size: 14px;
        margin: 10px 0px;
      }

     

      .sidebar-detail .sub-title {
        margin: 5px 0px;
      }
      .qr-code {
        width: max-content;
        height: max-content;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .cv hr {
        margin: 0px 5px;
        border: 0px;
        border-top: 0.5px solid #ccc;
      }

      .content {
          color: #000;
        margin: auto 50px;
      }
      .box-wrap {
        /* background-color: #caeaff; */
        margin: 10px 0px;
        padding: 10px;
        border-radius: 5px;
        /* box-shadow: 0px 0px 15px -5px; */
        /* box-sizing: border-box; */
      }

      td {
        vertical-align: top;
        min-width: 100px;
        /* border: none; */
      }

      table.table-border {
        margin: auto;
        border-collapse: collapse;
        border-radius: 5px;
        border-style: hidden; /* hide standard table (collapsed) border */
        /* box-shadow: 0 0 0 1px #244061; this draws the table border  */
      }
      table.table-border td {
        /* border-bottom: solid #244061 1px; */
        border-radius: 2px;
        padding: 5px;
      }
      th{
        text-align: left;
        padding: 5px;
      }
      table {
        font-size: 14px;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
     .cv{
       /* filter: hue-rotate(100deg); */
     }
     .photo-profile{
       /* filter: hue-rotate(-100deg); */
     }
     .tanggal{
       position: absolute;
       right: 0px;
       margin: 10px;
       font-size: 12px;
     }

    </style>
    
  </head>
  <body>
    <div class="cv" id="printCv">
      <div class="tanggal">Last Update: 02/07/2020 11:38 WIB</div>
      <div class="sidebar-left">
        <div class="top-left-box"></div>
        <div class="name-box">
          <div class="absolute-bottom">
              <div class="name">
                Dimar Hanung
              </div>
              <div class="posisi">Web Developer</div>
          </div>
          <!-- <img class="photo-profile" src="assets/img/dimar-rez.jpg" alt="" /> -->
        </div>

        <div class="sidebar-detail">
          <div class="title">
            Kontak
          </div>
          <div class="detail">
            <h4 class="sub-title">Alamat :</h4>
            <span class="blur"
              >Jalan Baturraden RT 02 RW 03 Desa Rempoah Kecamatan
              Baturaden</span
            >
          </div>
          <div class="detail">
            <h4 class="sub-title">No Hp :</h4>
            +62 877-9311-0422
          </div>
          <div class="detail">
            <h4 class="sub-title">Email :</h4>
            <a href="mailto:dimarhanung@gmail.com">dimarhanung@gmail.com</a>
          </div>
        </div>
        <div class="sidebar-detail">
          <div class="title">Bahasa</div>
          <div class="detail">
            <table>
              <tr>
                <td>Indonesia</td>
                <td>: Sangat Baik</td>
              </tr>
              <tr>
                <td>Inggris</td>
                <td>: Baik</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="sidebar-detail">
          <div class="title">Portofolio</div>
          <div class="detail">
            <div class="qr-code" id="qrcode"></div>
            <a href="https://bit.ly/38m2M9U" id="qrCodeLink">bit.ly/38m2M9U</a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="box-wrap">
          <div class="title">Tentang Saya</div>
          <div class="detail">
            17 Tahun. Keseharian membaca buku, fast learning. teliti, cekatan dan tidak suka menunda 
pekerjaan terlalu lama. Saya menempuh pendidikan dijurusan
Teknik Komputer dan Jaringan dan berpengalaman dengan bidang 
Linux Admin dan konögurasi router selama 2 tahun. Menjadi 
orang yang jujur dan tekun adalah prinsip saya untuk mewujudkan cita-cita saya dalam bidang teknologi informasi.
          </div>
        </div>
        <div class="box-wrap">
          <div class="title">Hard Skill</div>
          <div class="detail">
            <table>
              <tr>
                <td>Basic Language</td>
                <td>: HTML, CSS, Javascript ES6+, PHP</td>
              </tr>
              <tr>
                <tr>
                  <td>Database</td>
                  <td>: MySQL</td>
                </tr>
                <td>
                  Libary & Framework
                </td>
                <td>: Bootstrap, Materializecss, Jquery, Chart Js,&nbsp; &nbsp; &nbsp; AOS</td>
              </tr>
              <tr>
                <td>
                  Lainnya
                </td>
                <td>: Node Js, Linux Debian, Mikrotik, Laravel, CI, </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="box-wrap">
          <div class="title">Pengalaman Kerja</div>
          <div class="detail">
            <div class="sub-title">
              <b>&nbsp;Graha Telkom BSD Tangerang 2019 / Magang</b>
            </div>
            <table>
              <tr>
                <td>Lokasi</td>
                <td>: Graha Telkom BSD Tangerang</td>
              </tr>
              <tr>
                <td>Posisi</td>
                <td>: It Support</td>
              </tr>
              <tr>
                <td>Waktu</td>
                <td>: 3 Bulan</td>
              </tr>
              <tr>
                <td>Nilai Prakerin</td>
                <td>: Istimewa</td>
              </tr>
              <tr>
                <td>Tugas Harian</td>
                <td>
                  : Menyelesaikan berbagai masalah computer &nbsp;&nbsp;dari
                  umum hingga khusus.
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="box-wrap">
          <div class="title">Pendidikan</div>
          <div class="detail">
            <table>
              <tr>
                <td>2008 - 2014</td>
                <td>: SD Negeri 2 Purokerto Lor</td>
              </tr>
              <tr>
                <td>2014 - 2017</td>
                <td>: SMP Negeri 8 Purwokerto</td>
              </tr>
              <tr>
                <td>2017 - 2020</td>
                <td>
                  : SMK Telkom Purwokerto - Teknik Komputer &nbsp;&nbsp;dan
                  Jaringan
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="box-wrap">
          <div class="title">Sertifikat</div>
          <div class="detail">
            <table class="table-border">
              <tr>
                <th>Mitra</th>
                <th>Sertifikat</th>
              </tr>
              <!-- <tr>
                <td>CISCO Net Acad</td>
                <td>
                  <i>
                    Introduction to Cybersecurity 22/01/2020, CCNA Routing and Switching (
                    Introduction to Networks ) 22/01/2020, CCNA Routing And Switching (
                    Routing and Switching Essential ) 01/04/2020
                  </i>
                </td>
              </tr> -->
              <tr>
                <td>Dicoding</td>
                <td>
                  <i
                    >Fundamental Front-End Web Development 16/06/2020, Dasar Pemrograman
                    Web 01/05/2020</i
                  >
                </td>
              </tr>
              <tr>
                <td>Progate</td>
                <td>
                  <i>Path Pengembangan Web(Node.js) 13/05/2020</i>
                </td>
              </tr>
             
            </table>
            <br />
            Info Lengkap <a href="https://bit.ly/2YdtQqf">https://bit.ly/2YdtQqf</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      var qrcode = new QRCode("qrcode", {
        text: qrCodeLink.innerHTML,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    </script>
   
  </body>
</html>

    `
      

}
module.exports = welcome