$(document).ready(() => {

    let page = sessionStorage.getItem('gest-chelt-category');
    switch (page) {
        case "car": {
            $('#gest-cheltuieli-listare-top-title').text('Auto');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-car gest-cheltuieli-listare-top-left-icon');
            break;
        }

        case "shirt": {
            $('#gest-cheltuieli-listare-top-title').html('Haine');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-tshirt gest-cheltuieli-listare-top-left-icon');
            break;
        }

        case "gamepad": {
            $('#gest-cheltuieli-listare-top-title').html('Divertisment');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gamepad gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "hamburger": {
            $('#gest-cheltuieli-listare-top-title').html('Mancare');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-hamburger gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "gas-pump": {
            $('#gest-cheltuieli-listare-top-title').html('Combustibil');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gas-pump gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "cart": {
            $('#gest-cheltuieli-listare-top-title').html('General');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-shopping-cart gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "gift": {
            $('#gest-cheltuieli-listare-top-title').html('Cadouri');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-gift gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "pills": {
            $('#gest-cheltuieli-listare-top-title').html('Sanatate');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-pills gest-cheltuieli-listare-top-left-icon');
            break;
        }
        case "plane": {
            $('#gest-cheltuieli-listare-top-title').html('Vacante');
            $('#gest-cheltuieli-top-left-icon').attr('class', 'fas fa-plane gest-cheltuieli-listare-top-left-icon');
            break;
        }
    }

});