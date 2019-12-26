$(document).ready(() =>{
    if (sessionStorage.getItem("bugetVal") === null){
        sessionStorage.setItem("bugetVal", "300 RON");
        $('.buget-value').text("300 RON");
    }
    else{
        let bugetValue = sessionStorage.getItem("bugetVal");
        $('.buget-value').text(bugetValue);
    }

    $('#buget-change-button').on('click', function () {
        let bugetInputVal = $('#buget-change-input').val();
        if (bugetInputVal !== "") {
            sessionStorage.setItem("bugetVal", bugetInputVal + " RON");
            $('.buget-value').text(bugetInputVal + " RON");
            $('#buget-input-error').text("");

        }
        else{
            $('#buget-input-error').text("Campul nu poate fi gol");
        }

    })
});