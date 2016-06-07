let mainBody = $("#main-body");
let sideBar = $(".side-bar");
let hideSideBarButton = $("#hide-side-bar");
let showSideBarButton = $("#show-side-bar ");

hideSideBarButton.on('click', () => {
    sideBar.addClass("hide-side-bar");
    hideSideBarButton.addClass("hide-side-bar-button");
    showSideBarButton.removeClass("hide-side-bar-button");

    mainBody.addClass("col-md-12");
    mainBody.removeClass("col-md-9 col-md-offset-3");
});

showSideBarButton.on('click', () => {
    sideBar.removeClass("hide-side-bar");
    showSideBarButton.addClass("hide-side-bar-button");
    hideSideBarButton.removeClass("hide-side-bar-button");

    mainBody.addClass("col-md-9 col-md-offset-3");
    mainBody.removeClass("col-md-12");
});