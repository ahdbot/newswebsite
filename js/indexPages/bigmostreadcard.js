const bigMostReadCard = `<div class="card-news">
<a href="">
    <div class="card-img">
        <img src="" alt="">
    </div>
    <div class="card-text">
      <h4></h4>
        <time datetime="">
    
        </time>
    </div>
</a>
</div>`


class BigMostReadCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = bigMostReadCard;
        this.querySelector('h4').innerText = this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('time').innerHTML = this.getAttribute('datetime');
        this.querySelector('time').setAttribute('datetime',this.getAttribute('datetime'));

    }

}


window.customElements.define('big-most-read-card',BigMostReadCard);