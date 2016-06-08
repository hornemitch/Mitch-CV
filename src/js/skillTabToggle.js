let frontEndShow = $('#show-front-button');
let frontEndHide = $('#hide-front-button');
let frontEndSkills = $(".front-end-skills");

function showButton(myButton){
    myButton.addClass("show-icon");
    myButton.removeClass("hide-icon");
}
function hideButton(myButton){
    myButton.addClass("hide-icon");
    myButton.removeClass("show-icon");
}

function showSkills(mySkills){
    mySkills.addClass("skill-row-show");
    mySkills.removeClass("skill-row-hide");
}
function hideSkills(mySkills){
    mySkills.addClass("skill-row-hide");
    mySkills.removeClass("skill-row-show");
}

frontEndShow.on('click', () =>{
    showButton(frontEndHide);
    hideButton(frontEndShow);
    showSkills(frontEndSkills);
});
frontEndHide.on('click', () =>{
    showButton(frontEndShow);
    hideButton(frontEndHide);
    hideSkills(frontEndSkills);
});