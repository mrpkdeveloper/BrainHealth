function loadArticles() {
    $.get('/api/articles', (posts) => {
        for (let p of posts) {
            // console.log(p)
            $('#Article-container').append(
                $(`
            <div class="col-4">
                <div class="card m-2" style="width: 18rem;">
                <img src="#" class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                    <p class="card-text">${p.body.substring(0, 100)}
                    <a href="#">....Readmore</a>
                    </p>
                    <a href="#" class="card-link">Comments</a>
                    <a href="#" class="card-link">Like</a>
                 </div>
                </div>        
            </div>
        
        `)
            )


        }
    })
}