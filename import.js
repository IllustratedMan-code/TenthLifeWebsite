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
