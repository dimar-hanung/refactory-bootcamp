# Python TryOut

## Main Task
- [x] Buatlah sebuah CLI App menggunakan framework CLICK.
- [x] Buatlah setup.py dengan beberapa ketentuan berikut:
    - [x] package name = cliweather_yourname
    - [x] install_require = isi semua file yang kalian butuhkan untuk membangun cli app kalian (ie : requests, aiohttp, etc)
    - [x] entry_points = beri nama cli app kalian dengan cliweather.
- [x] Gunakan Open Weather Map openweathermap.org.
- [x] Baca documentation API open weather map dan sesuaikan dengan functional requirement yang ada di point selanjutnya.
- [x] .env
## Functional Requiments
- [x] Menampilkan info cuaca hari ini berdasarkan nama kota yang ada : Command Weather
    - [x] Jika menambahkan option celcius (--celcius) maka secara otomatis suhu yang tampil dalam satuan unit celcius, begitu juga dengan fahrenheit (--fahrenheit).
    - [x] Option --temp akan menampilkan suhu saat ini pada kota yang disebutkan.
- [x] Multiple City Weather Menampilkan cuaca saat ini pada kota-kota yang disebutkan.
- [x] Menampilkan ramalan cuaca dalam satuan waktu dengan interval 3 jam.
    - [x] command forecast secara default akan menampilkan ramalan cuaca pada sebuah kota yang disebutkan dalam satu hari dengan interval waktu 3 jam dan satuan unit suhu celcius.
    - [x] option --days akan menampilkan semua ramalan cuaca selama 5 hari ke depan dengan interval waktu per 3 jam dan satuan Celsius sebagai default unit. Simpan hasilnya kedalam format file .json dengan nama format [timestamp]_[city]_days.json.
- [ ] Ramalan cuaca dengan satuan waktu (morning, evening, night)
    - [ ] Menampilkan ramalan cuaca sebuah kota selama 3 hari ke depan.
    - [ ] Menyimpan data ramalan cuaca selama 7 hari kedepan untuk satu kota atau beberapa kota sekaligus.