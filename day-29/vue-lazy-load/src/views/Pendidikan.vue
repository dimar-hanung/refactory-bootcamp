<template>
     <article>
        <section id="aboutYear" class="time-wrap">
            <div class="timeline-wrap">
                <div class="timeline-desc-wrap">
                    <div class="timeline-year">2001</div>
                    <div class="timeline-desc">14 Desember 2001 untuk pertama kalinya saya melihat dunia yang kata sebagian orang itu indah dan sebagian lain nya berkata kejam</div>
                </div>
                <div class="timeline-desc-wrap">
                    <div class="timeline-year">2006</div>
                    <div class="timeline-desc">Masuk TK Pertiwi Baturraden, ga masuk PAUD tapi TK nya 2 kali, udah megang komputer jaman nya windows 2000 </div>
                </div>
                <div class="timeline-desc-wrap">
                    <div class="timeline-year">2008 - 2014</div>
                    <div class="timeline-desc">Lanjut SD Negeri 2 Purwokerto Lor, btw SD selalu naik kelas dengan nilai diatas rata rata dikit ya wkwk</div>
                </div>
                <div class="timeline-desc-wrap">
                    <div class="timeline-year">2014 - 2017</div>
                    <div class="timeline-desc">Masuk ke masa masa SMP, akhirnya di masa ini punya laptop untuk pertamakalinya, SMP Negeri 8 Purwokerto</div>
                    <div class="timeline-desc">Masa dimana internet 300KBps udah kayak surga</div>
                </div>
                <div class="timeline-desc-wrap">
                    <div class="timeline-year">2017 - 2020</div>
                    <div class="timeline-desc">Masa SMK, walau agak salah jurusan tapi enjoy aja lah wkwk, jurusan yang saya ambil adalah TKJ, di SMK Telkom Purwokerto, lulusan jalur covid19 </div>
                </div>
            </div>
        </section>
    </article>
</template>
<style scoped>
.time-wrap {
    z-index: 3;
}

.timeline-wrap {
    background: white;
    margin: 20px auto;
    max-width: 800px;
    padding: 50px;
    box-shadow: 0px 0px 15px -5px black;
    border-radius: 20px;
    z-index: 3;

}

.timeline-desc-wrap {
    margin: auto;
    max-width: 800px;
    /* max-height: 80vh; */
    position: relative;
    padding: 20px 0px 20px 10px;
    border-left: solid #17a2b8 2px;
}


.timeline-year {
    padding: 5px 15px;
    background: #17a2b8;
    color: white;
    width: max-content;
    text-align: center;
    border-radius: 0px 3px 3px 0px;
    margin-left: calc(-10px);
}

.timeline-desc {
    padding: 20px;
    background: #ccc3;
    border-left: solid #17a2b8 2px;
    margin-top: 10px;
    font-family: sans-serif;
    position: relative;
}

.timeline-desc:before {
    content: '';
    position: absolute;
    width: 13px;
    top: 50%;
    left: -14px;
    height: 2px;
    background: #17a2b8;
}



</style>