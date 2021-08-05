$(() => {
  //after loading navbar.html file than obly loginifneeded function will work
  $("#navbar").load("/components/navbar.html", loginIfNeeded);
  $("#footer").load("/components/footer.html");
  $("#content").load("/components/Home.html");
});

function loginIfNeeded() {
  //if window.localstorage.user is present then pass JSON.parse(window.localStorage.user) to window.currentuser
  window.currentuser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  if (!currentuser) {
    $.post("/api/users", {}, (user) => {
      console.log("current user as  : ", user.username);
      window.localStorage.user = JSON.stringify(user);
      currentuser = user;
      $("#nav-username").text(currentuser.username);
    });
  } else {
    console.log("resuming session as ", currentuser.username);
    $("#nav-username").text(currentuser.username);
  }
}

function loginIfNeeded() {
  //   if window.localstorage.user is present then pass JSON.parse(window.localStorage.user) to window.currentuser ///otherwise pass null
  window.currentuser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  if (!currentuser) {
    // do login ... extract details from backend ... suppose extrated details in as json opbject named user
    window.localStorage.user = JSON.stringify(user);
    currentuser = user;
  } else {
    console.log("resuming session as ", currentuser.username);
  }
}
