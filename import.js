class album extends HTMLElement {
  constructor() {
    super();
    let albumTemplate = document.querySelector("#album")
    let albumClone = albumTemplate.content.cloneNode(true);
    if (this.hasAttribute("size")){
      let size = parseInt(this.getAttribute("size"));
      for(let i=1; i<size; i++){
        let picture = albumClone.querySelector("#col").cloneNode(true);
        if (this.hasAttribute("img-" + i)){
          picture.querySelector("#img").setAttribute("src", this.getAttribute("img-" +i))
        }
        if (this.hasAttribute("text-"+i)){
          picture.querySelector("#text").innerHTML = this.getAttribute("text-"+i)
        }
        albumClone.querySelector("#add-here").appendChild(picture);
      };

    }
    if (this.hasAttribute("img")){
      let img = this.getAttribute("img");
      albumClone.querySelector("#img").setAttribute("src", img);
    }
    if (this.hasAttribute("text")){
      albumClone.querySelector("#text").innerHTML = this.getAttribute("text")
    }
      this.appendChild(albumClone);
  }
}
customElements.define('cat-album', album);

class borderHero extends HTMLElement {
  constructor() {
    super();
    let current_this = this;
    let template = document.querySelector("#border-hero")
    let clone = template.content.cloneNode(true);
    if (this.hasAttribute("header")){
      clone.querySelector("#header").innerHTML = this.getAttribute("header")
    }

    if (this.hasAttribute("img")){
      clone.querySelector("#img").setAttribute("src", this.getAttribute("img"));
    }else{
      clone.querySelector("#img-container").remove();
    }
      clone.querySelector("#text").innerHTML = this.innerHTML
    this.innerHTML = "";

    function set_button(b, c){
      let button = document.createElement("button")
      button.setAttribute("type", "button");
      button.setAttribute("class", c);
      button.innerHTML = current_this.getAttribute("button-" + String(b))
      if (current_this.hasAttribute("onclick-" + String(b))){
        button.setAttribute("onclick", "location.href=" + "'" + current_this.getAttribute("onclick-" + String("b")) + "'")
      }
      clone.querySelector("#button").appendChild(button)
    }
    if (this.hasAttribute("button-1")){
      set_button(1, "btn btn-primary btn-lg px-4 me-md-2 fw-bold");
    }
    if (this.hasAttribute("button-2")){
      set_button(2, "btn btn-outline-secondary btn-lg px-4");
    }

    this.appendChild(clone);
  }
}
customElements.define('border-hero', borderHero);

class centeredHero extends HTMLElement {
  constructor() {
    super();
    let current_this = this;
    let template = document.querySelector("#centered-hero")
    let clone = template.content.cloneNode(true);
    if (this.hasAttribute("header")){
      clone.querySelector("#header").innerHTML = this.getAttribute("header")
    }

    if (this.hasAttribute("img")){
      clone.querySelector("#img").setAttribute("src", this.getAttribute("img"));
    }else{
      clone.querySelector("#img").remove();
    }
      clone.querySelector("#text").innerHTML = this.innerHTML
    this.innerHTML = "";

    function set_button(b, c){
      let button = document.createElement("button")
      button.setAttribute("type", "button");
      button.setAttribute("class", c);
      button.innerHTML = current_this.getAttribute("button-" + String(b))
      if (current_this.hasAttribute("onclick-" + String(b))){
        button.setAttribute("onclick", "location.href=" + "'" + current_this.getAttribute("onclick-" + String("b")) + "'")
      }
      clone.querySelector("#button").appendChild(button)
    }
    if (this.hasAttribute("button-1")){
      set_button(1, "btn btn-primary btn-lg px-4 gap-3");
    }
    if (this.hasAttribute("button-2")){
      set_button(2, "btn btn-outline-secondary btn-lg px-4");
    }

    this.appendChild(clone);
  }
}
customElements.define('centered-hero', centeredHero);
