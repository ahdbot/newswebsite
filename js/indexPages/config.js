
import { API_URL } from "./urls.js";


console.log(API_URL);

async function sliderFetch() {


    let res = await fetch('http://127.0.0.1:4010/slider')
    let data = await res.json();

    data.map(slide => {


        const el = document.createElement('slider-component');


        el.setAttribute('src', slide.img_uri)
        el.setAttribute('text', slide.title)
        el.setAttribute('href', slide.link)

        document.getElementById('carousel-inner').appendChild(el);

    })

    let slider = document.getElementsByClassName('carousel-item');

    slider[0].classList.add("active");
}


async function SiderHeaderArticleFetch() {
    let res = await fetch('http://127.0.0.1:4010/header-articles');
    let data = await res.json();


    data.map(article => {

        const el = document.createElement("side-article");

        el.setAttribute('text', article.title);
        el.setAttribute('src', article.img_uri);
        el.setAttribute('href', article.link);
        el.setAttribute('category', article.category);


        document.getElementById('header-articles').appendChild(el);

    })
}


async function newsArticleFetch() {

    let res = await fetch('http://127.0.0.1:4010/news');
    let data = await res.json();


    data.map(article => {

        const el = document.createElement("article-component");


        el.setAttribute('title', article.title);
        el.setAttribute('src', article.img_uri);
        el.setAttribute('href', article.link);
        el.setAttribute('category', article.category);
        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-4');

        document.getElementById('news').appendChild(el);

    })
}

async function MostReadCardFetch() {

    let res = await fetch('http://127.0.0.1:4010/most-read');
    let data = await res.json();


    for (let i = 0; data.length; i++) {

        if (i % 2 == 0) {
            const el = document.createElement('most-read-card');
            el.setAttribute('title', data[i].title);
            el.setAttribute('src', data[i].img_uri);
            el.setAttribute('href', data[i].link);
            el.setAttribute('excerpt', data[i].paragraph);
            el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ' , ' + moment(parseInt(data[i].date)).format('LL'));


            document.getElementById('most-read').appendChild(el);
        } else {

            const el = document.createElement('big-most-read-card')
            el.setAttribute('title', data[i].title)
            el.setAttribute('src', data[i].img_uri)
            el.setAttribute('href', data[i].link)
            el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ' , ' + moment(parseInt(data[i].date)).format('LL'));


            document.getElementById('most-read').appendChild(el);
        }
    }
}


sliderFetch();
SiderHeaderArticleFetch();
newsArticleFetch();
MostReadCardFetch();