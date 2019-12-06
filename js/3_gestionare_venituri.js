$(document).ready(() => {
    let listStringPopulator = "";
    let addedIncome = sessionStorage.getItem('addedIncome');
    let totalIncome = 0;
    sessionStorage.setItem('totalIncome', totalIncome);
    console.log(addedIncome);
    if (addedIncome === null) {
        console.log("enters here");
        let incomeList = [{'descriere': 'Chirie spatiu', 'suma': '1500 RON'}, {
            'descriere': 'Salariu firma',
            'suma': '4500 RON'
        }, {'descriere': 'Profit afacere', 'suma': '2500 RON'}];
        totalIncome = 8500;
        sessionStorage.setItem('incomeList', JSON.stringify(incomeList));
        sessionStorage.setItem('totalIncome', totalIncome);
        incomeList.forEach((income) => {
            listStringPopulator +=
                '<li class="gest-venituri-main-list-element">' +
                '<p class="gest-venituri-main-list-element-name">' + income.descriere + '</p>' +
                '<p class="gest-venituri-main-list-element-suma">' + income.suma + '</p>' +
                '</li>';
        });
        $('#gest-venituri-main-list').html(listStringPopulator);
    } else {
        let incomeList = JSON.parse(sessionStorage.getItem('incomeList'));
        incomeList.forEach((income) => {
            listStringPopulator +=
                '<li class="gest-venituri-main-list-element">' +
                '<p class="gest-venituri-main-list-element-name">' + income.descriere + '</p>' +
                '<p class="gest-venituri-main-list-element-suma">' + income.suma + '</p>' +
                '</li>';
        });
        $('#gest-venituri-main-list').html(listStringPopulator);
    }

    $('#pagina-venituri-total-value').text(totalIncome + ' RON');
});