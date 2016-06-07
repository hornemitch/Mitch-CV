let sideBar = $(".side-bar");
let hideSideBarButton = $("#hide-side-bar");
let showSideBarButton = $("#show-side-bar ");

hideSideBarButton.on('click', () => {
    sideBar.addClass("hide-side-bar");
    hideSideBarButton.addClass("hide-side-bar-button");
    showSideBarButton.removeClass("hide-side-bar-button");
});

showSideBarButton.on('click', () => {
    sideBar.removeClass("hide-side-bar");
    showSideBarButton.addClass("hide-side-bar-button");
    hideSideBarButton.removeClass("hide-side-bar-button");
});