$(document).ready(function(){

   //funcion filter
    $('#options').select(function(){
        var foodOption = $(this).val();
        $('#food').hide();

        $('#food').each(function(){
            var food = $(this).text();
            if (food.indexOf(foodOption) != -1) {
                $(this).show();
            }
        });


    }); //funcion filter
    
});

/*
$('#search').keyup(function(){
        var nombreCont = $(this).val();
        $('#contactos').hide();

        $('#contactos').each(function(){
            var search = $(this).text();
            if (search.indexOf(nombreCont) != -1) {
                $(this).show();
            }
        });

        */