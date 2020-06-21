let navlinks = $('.navbar-nav .nav-link')
let droplinks = $('.navbar-nav .dropdown-item')

navlinks.click((ev) => {
    console.log($(ev.target).attr('data-component'))

    let componenturl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componenturl)
})

droplinks.click((ev) => {
    console.log($(ev.target).attr('data-component'))

    let componenturl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componenturl)
})