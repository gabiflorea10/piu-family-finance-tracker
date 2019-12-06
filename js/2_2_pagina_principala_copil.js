$(document).ready(() => {

    $('#pagina-principala-li-banii-mei').on('click', function () {
        window.location = "./14_copil_banii_mei.html";
    });

    $('#pagina-principala-li-adauga-obiectiv').on('click', function () {
        window.location = "./12_copil_adaugare_obiectiv.html";
    });

    $('#pagina-principala-li-obiective-adaugate').on('click', function () {
        window.location = "./13_copil_vizualizare_obiective.html";
    });

    $('#logout-button-copil').on('click', function () {
        sessionStorage.clear();
        window.location = "./1_login.html";
    });

});