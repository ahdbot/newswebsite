class SliderComponent extends HTMLElement {


    constructor() {
        super();
    }



    connectedCallback() {
        this.innerHTML = `<h1>${this.getAttribute('text')}</h1>`
      
    }


}



window.customElements.define('slider-component', SliderComponent);