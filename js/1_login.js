$(document).ready(() => {

    $('#login-button').on('click', function () {
        let userName = $('#login-username').val();
        let password = $('#login-password').val();

        console.log(userName);
        console.log(password);

        if (userName === "parent" && password === "parent") {
            window.location = './2_1_pagina_principala_adult.html';
        }
        else if(userName === "marius" && password === "marius"){
            window.location = './2_2_pagina_principala_copil.html';
        }
        else {
            alert('User sau parola gresite');
        }
    });

});