$(document).ready(() => {

    getObjectiveList();

});

function getObjectiveList() {
    let obiectiveList = JSON.parse(sessionStorage.getItem('obiectiveList' ));

    if (obiectiveList === null) {

    } else {
        populateList(obiectiveList);
    }
}

function populateList(list) {
    let listStringPopulator = "";
    list.forEach((objective) => {
        listStringPopulator += '<li>' +
            '       <img src="..\\resources\\pictures\\tree0.png">' +
            '            <div>' +
            '                <label>'+objective.name+'</label><br>' +
            '                <label>Cost total : '+objective.suma+' lei</label><br>' +
            '                <label>Economisiți : 0 lei</label><br>' +
            '                <input type="submit" value="Economisește"/>' +
            '            </div>' +
            '</li>';
    });
    $('#lista_obiective').append(listStringPopulator);
}