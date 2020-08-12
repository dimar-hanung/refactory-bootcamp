#!/usr/bin/env node
const { program } = require('@caporal/core');
const axios = require( 'axios' );
const cheerio =require('cheerio');

async function scrapeKompas() {
    const html = await axios.get('https://indeks.kompas.com/headline');
    const $ = await cheerio.load(html.data);
    let data = [];
  
    $('.article__link').each((i, elem) => {
      
        data.push({
          title: $(elem).text(),
          link:$(elem).attr('href')
        })
      
    });
  
    console.log(data);
  }

program
.command("headline")
.action(()=>{
    scrapeKompas()
})


program.run()
  