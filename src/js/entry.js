require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("font-awesome-webpack");
require("./sideBarToggle");
require("../styles/bootstrap-no-padding.less");
require("../styles/main-body.less");
require("../styles/side-bar.less");

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});