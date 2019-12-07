$(document).ready(() => {
    let showList = "";
    let populateList = sessionStorage.getItem('populateList');
    console.log(populateList);
    if (populateList === null) {
        let childrenList = [{'name': 'Marius', 'money': '350 RON'}];
        sessionStorage.setItem('childrenList',JSON.stringify(childrenList));
        childrenList.forEach((child) => {
            showList += '<li class="conturi-copii-main-list-element">' +
                '<p class="conturi-copii-main-list-element-name">' + child.name + '</p>' +
                '<p class="conturi-copii-main-list-element-money">' + child.money + '</p>' +
                '</li>';
        });
        $('#conturi-copii-main-list').html(showList);
    } else {
        let childrenList = JSON.parse(sessionStorage.getItem('childrenList'));
        childrenList.forEach((child) => {
            showList += '<li class="conturi-copii-main-list-element">' +
                '<p class="conturi-copii-main-list-element-name" onclick="myScript">' + child.name + '</p>' +
                '<p class="conturi-copii-main-list-element-money">' + child.money + '</p>' +
                '</li>';
        });
        $('#conturi-copii-main-list').html(showList);
    }
});

function myScript() {
    console.log("MERGE");
}