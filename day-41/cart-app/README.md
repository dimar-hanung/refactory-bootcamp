# refactory-web-doc

## Live Demo
https://dimar-vuex-cart.web.app/

## Main Task
- [x] Halaman Home
- [x] Halaman Cart
- [x] Import Data (axios)
- [x] FIlter / Hitung total price
- [x] jumlah barang
- [x] tambahkan dan hapus
- [x] vuex
- [x] Memisah Komponen filter dan cart list

## Additional Task
- [x] Cache Local Storage
- [x] TailwindCss
- [x] Add Random Price
- [ ] Responsive

## Tailwindcss Intall
1. Install Tailwindcss
    ```
    npm intall tailwindcss
    ```
1. Install postcss
    ```
    npm install @fullhuman/postcss-purgecss
    ```
1. `tailwind init`
1.  Tambahkan `index.css` pada `src/assets/styles/index.css` dengan isi :
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .btn{
        @apply bg-red-500 text-white;
        padding:5px;
    }
    ```

1. buat file `postcss.config.js` pada root project yang isinya:
    ```js
    const autoprefixer = require('autoprefixer');
    const tailwindcss = require('tailwindcss');
    const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

    const purgecss = postcssPurgecss({
    // Specify the paths to all of the template files in your project.
    content: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    // Include any special characters you're using in this regular expression.
    // See: https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    // Whitelist auto generated classes for transitions and router links.
    // From: https://github.com/ky-is/vue-cli-plugin-tailwind
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
    });

    module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : [],
    ],
    };
    ```

1. import pada `main.js`
    ```js
    import '@/assets/styles/index.css';
    ```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
