$(
    () => {
        //after loading navbar.html file than obly loginifneeded function will work
        $('#navbar').load('/components/navbar.html', loginIfNeeded)
        $('#footer').load('/components/footer.html')
        $('#content').load('/components/Articles.html')

    }
)

function loginIfNeeded() {
    window.currentuser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentuser) {
        $.post('/api/users', {}, (user) => {
            console.log("current user as  : ", user.username)
            window.localStorage.user = JSON.stringify(user)
            currentuser = user
            $('#nav-username').text(currentuser.username)

        })
    } else {
        console.log("resuming session as ", currentuser.username)
        $('#nav-username').text(currentuser.username)
    }
}

