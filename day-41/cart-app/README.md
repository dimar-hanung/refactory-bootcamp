# vuex-cart
## Before Deadline
Tue Sep 15 01:16:51 2020\
https://github.com/dimar-hanung/refactory-bootcamp/tree/73a57c343d10aa07ac9980f02c892a8d3a556985/day-41/cart-app
## Live Demo
https://dimar-vuex-cart.web.app/

## Main Task
- [x] Halaman Home
- [x] Halaman Cart
- [x] SearchBox
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
- [ ] Detail
- [ ] Responsive

## vscode config for tailwind
1. extension\
[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
1. vscode config
    ```json
    "tailwindCSS.includeLanguages": {
        "plaintext": "html"
    },
    "css.validate": false,
    ```

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
