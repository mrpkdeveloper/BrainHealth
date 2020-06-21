$(
    () => {
        let title = $('#title')
        let body = $('#body')
        let submit_btn = $('#submit-btn')

        submit_btn.click(() => {
            // console.log("button clicked")
            // console.log(currentuser.id)
            let titleval = title.val()
            let bodyval = body.val()
            addarticle(currentuser.id, titleval, bodyval, function (addedarticle) {
                window.alert(" added " + addedarticle.title + "to the database")
            })
        })
    }
)



function addarticle(userid, title, body, done) {
    $.post('/api/articles', {
        userId: userid,
        title: title,
        body: body
    }, function (data) {
        done(data)
    })
}