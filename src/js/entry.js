require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("font-awesome-webpack");
require("./sideBarToggle");
require("./skillTabToggle");
require("../styles/bootstrap-no-padding.less");
require("../styles/general.less");
require("../styles/main-body.less");
require("../styles/side-bar.less");
require("../styles/contact-div.less");
require("../styles/skills-div.less");
require("../styles/qualifications.less");
require("../styles/experience.less");
require("../styles/footer.less");

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip({placement: "right", trigger: "hover"});
});
