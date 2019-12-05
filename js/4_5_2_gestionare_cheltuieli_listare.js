$(document).ready(() => {

    let page = sessionStorage.getItem('gest-chelt-category');
    switch (page) {
        case "car": {
            $('#gest-cheltuieli-listare-top-title').text('Auto');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-car gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }

        case "shirt": {
            $('#gest-cheltuieli-listare-top-title').html('Haine');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-tshirt gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }

        case "gamepad": {
            $('#gest-cheltuieli-listare-top-title').html('Divertisment');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gamepad gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "hamburger": {
            $('#gest-cheltuieli-listare-top-title').html('Mancare');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-hamburger gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "gas-pump": {
            $('#gest-cheltuieli-listare-top-title').html('Combustibil');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gas-pump gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "cart": {
            $('#gest-cheltuieli-listare-top-title').html('General');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-shopping-cart gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "gift": {
            $('#gest-cheltuieli-listare-top-title').html('Cadouri');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gift gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "pills": {
            $('#gest-cheltuieli-listare-top-title').html('Sanatate');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-pills gest-cheltuieli-listare-top-left-icon');

            let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

            if (cheltuieliList === null) {
                cheltuieliList = [{
                    'description': 'Reparatie garnitura',
                    'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
                }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
                    {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
                sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
            }

            populateList(cheltuieliList);

            break;
        }
        case "plane": {
            $('#gest-cheltuieli-listare-top-title').html('Vacante');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-plane gest-cheltuieli-listare-top-left-icon');

            chooseList('plane');

            break;
        }
    }

});

function chooseList(page) {
    let cheltuieliList = JSON.parse(sessionStorage.getItem('cheltuieliList-' + page));

    if (cheltuieliList === null) {
        cheltuieliList = [{
            'description': 'Reparatie garnitura',
            'price': '300 RON', 'day': '02', 'month': 'Oct', 'year': '2018'
        }, {'description': 'Sincronizare', 'price': '235 RON', 'day': '04', 'month': 'Dec', 'year': '2019'},
            {'description': 'ITP', 'price': '70 RON', 'day': '10', 'month': 'Nov', 'year': '2017'}];
        sessionStorage.setItem('cheltuieliList-' + page, JSON.stringify(cheltuieliList));
    }

    populateList(cheltuieliList);
}

function populateList(list) {
    let listStringPopulator = "";
    list.forEach((bill) => {
        listStringPopulator += '<tr>' +
                                    '<td class="gest-cheltuieli-list-date-td" rowspan="2">' +
                                        '<p class="gest-cheltuieli-list-date-day">' + bill.day + '</p>' +
                                        '<p class="gest-cheltuieli-list-date-month">' + bill.month + '</p>' +
                                        '<p class="gest-cheltuieli-list-date-year">' + bill.year + '</p>' +
                                    '</td>' +
                                    '<td class="gest-cheltuieli-list-price-td"><p>' + 'Suma : ' + bill.price + '</p></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class="gest-cheltuieli-list-description-td"><p>' + bill.description + '</p></td>' +
                                '</tr>';
    });
    $('.gest-cheltuieli-list-table').html(listStringPopulator);
}