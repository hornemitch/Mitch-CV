let frontEndShow = $('#show-front-button');
let frontEndHide = $('#hide-front-button');
let frontEndSkills = $(".front-end-skills");

let backEndShow = $('#show-back-button');
let backEndHide = $('#hide-back-button');
let backEndSkills = $(".back-end-skills");

let dbShow = $('#show-db-button');
let dbHide = $('#hide-db-button');
let dbSkills = $(".db-skills");

let testShow = $('#show-test-button');
let testHide = $('#hide-test-button');
let testSkills = $(".test-skills");

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

backEndShow.on('click', () =>{
    showButton(backEndHide);
    hideButton(backEndShow);
    showSkills(backEndSkills);
});
backEndHide.on('click', () =>{
    showButton(backEndShow);
    hideButton(backEndHide);
    hideSkills(backEndSkills);
});

dbShow.on('click', () =>{
    showButton(dbHide);
    hideButton(dbShow);
    showSkills(dbSkills);
});
dbHide.on('click', () =>{
    showButton(dbShow);
    hideButton(dbHide);
    hideSkills(dbSkills);
});

testShow.on('click', () =>{
    showButton(testHide);
    hideButton(testShow);
    showSkills(testSkills);
});
testHide.on('click', () =>{
    showButton(testShow);
    hideButton(testHide);
    hideSkills(testSkills);
});