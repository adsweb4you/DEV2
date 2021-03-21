export function allposts(urls) {
   fetch(urls)
  .then(response => response.json())
  .then(json => {


    for (let i = 0; i < json.length; i++) {
        const element = json[i];
        
        $("#outs").prepend(`<div class="col-md-4"><div class="card">
        <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
       </div>
      </div>`)

    }

  })
}