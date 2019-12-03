$(document).ready(() => {

    $('#login-button').on('click', function () {
        let userName = $('#login-username').val();
        let password = $('#login-password').val();

        console.log(userName);
        console.log(password);

        if (userName === 'parent' && password === "parent") {
            window.location = '/piu-family-finance-tracker/html/alta_pagina.html';
        } else {
            alert('User sau parola gresite');
        }
    });


});