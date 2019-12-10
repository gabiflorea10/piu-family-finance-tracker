$(document).ready(() => {
    if(sessionStorage.getItem('buget_value') === null &&
        sessionStorage.getItem('cheltuieli_value') === null
    )
    {
    sessionStorage.setItem('buget_value', 3500);
    sessionStorage.setItem('cheltuieli_value', 2600);
    }

    let buget_value = sessionStorage.getItem('buget_value');
    let cheltuieli_value = sessionStorage.getItem('cheltuieli_value');

    let disponibil = buget_value - cheltuieli_value;

    $('#pagina-principala-disponibil-value').text(disponibil + ' RON');

    $('#pagina-principala-li-cheltuieli').on('click', function () {
        window.location = "./4_5_1_gestionare_cheltuieli_principala.html";
    });

    $('#pagina-principala-li-venituri').on('click', function () {
        window.location = "./3_1_gestionare_venituri.html";
    });

    $('#pagina-principala-li-facturi').on('click', function () {
        window.location = "./6_1_gestionare_facturi.html";
    });

    $('#pagina-principala-li-buget').on('click', function () {
        window.location = "./15_buget.html";
    });

    $('#pagina-principala-li-conturi').on('click', function () {
        window.location = "./7_gestionare_conturi.html";
    });

    $('#pagina-principala-li-istoric').on('click', function () {
        window.location = "./10_vizualizare_istoric.html";
    });

    $('#pagina-principala-li-copii').on('click', function () {
        window.location = "./8_9_conturi_copii.html";
    });

    $('#logout-button-adult').on('click', function () {
        sessionStorage.clear();
        window.location = "./1_login.html";
    });

});