FROM node:latest

# pasang (install) server http sederhana untuk menjalankan static content
RUN npm install -g http-server

# buat folder 'app' pada direktori yang sedang dikerjakan
WORKDIR /app

# salin 'package.json' dan 'package-lock.json' (jika ada)
COPY package*.json ./

# pasang dependecy proyek
RUN npm install

# salin berkas-berkas proyek serta folder-foldernya ke direktori yang sedang dikerjakan (misal. folder 'app)
COPY . .
# bangun aplikasi untuk produksi dengan minifikasi
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
