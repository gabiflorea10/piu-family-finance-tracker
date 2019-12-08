$(document).ready(() => {

    $('#add_button').on('click', function () {

        console.log("Am apasat adauga");
        const name = $('#name').val();
        const suma = $('#suma').val();
        const date = $('#data_finalizare').val();
        const mod_economire = $('#mod_economisire').val();
        if (!name || !suma || !date || !mod_economire) {
            alert('Completati corect datele!');
            return;
        }

        const newElement = {name: name, date: date, suma: suma, mod_economisire: mod_economire};
        console.log(name + " " + suma + " " + date + " " + mod_economire);

        let obiectiveList = sessionStorage.getItem('obiectiveList');
        if (obiectiveList == null) {
            obiectiveList = [newElement];
        } else {
            obiectiveList = JSON.parse(obiectiveList);
            obiectiveList = obiectiveList.concat(newElement);
            console.log('2,', obiectiveList);

        }
        sessionStorage.setItem('obiectiveList', JSON.stringify(obiectiveList));
        window.location = "./13_copil_vizualizare_obiective.html";
    });

});
