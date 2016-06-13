let mainBody = $("#main-body");
let mainHeading = $("#heading");
let sideBar = $(".side-bar");
let hideSideBarButton = $("#hide-side-bar");
let showSideBarButton = $("#show-side-bar ");
let foot = $(".foot-inner");

hideSideBarButton.on('click', () => {
    sideBar.addClass("hide-side-bar");
    hideSideBarButton.addClass("hide-side-bar-button");
    showSideBarButton.removeClass("hide-side-bar-button");

    mainBody.addClass("col-md-12");
    mainBody.removeClass("col-md-9 col-md-offset-3");
    mainHeading.addClass("show-heading");
    mainHeading.removeClass("hide-heading");
    foot.addClass("col-md-12");
    foot.removeClass("col-md-9");
});

showSideBarButton.on('click', () => {
    sideBar.removeClass("hide-side-bar");
    showSideBarButton.addClass("hide-side-bar-button");
    hideSideBarButton.removeClass("hide-side-bar-button");

    mainBody.addClass("col-md-9 col-md-offset-3");
    mainBody.removeClass("col-md-12");
    mainHeading.addClass("hide-heading");
    mainHeading.removeClass("show-heading");
    foot.addClass("col-md-9");
    foot.removeClass("col-md-12");
});