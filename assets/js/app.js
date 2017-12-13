//loader
var time;

function splash() {
  time = setTimeout(showPage, 1000);
}

function showPage() {
  $("#loader").addClass('hidden');
  $("#content").removeClass('hidden').addClass('show');
}



$(document).ready(function(){

  $("#categorias").change(function() {
   var foodOption = $(this).val();
    $("#all").hide();

      if(foodOption == "china"){
         $('#chinafood').removeClass('hidden');
         $('#venefood, #arabefood, #perufood').addClass('hidden');
        }else if(foodOption == "venezolana"){
            $('#venefood').removeClass('hidden');
            $('#chinafood, #arabefood, #perufood ').addClass('hidden');
        }else if(foodOption == "arabe"){
            $('#arabefood').removeClass('hidden');
            $('#venefood, #chinafood, #perufood').addClass('hidden');
        }else if(foodOption == "peruana"){
            $('#perufood').removeClass('hidden');
            $('#venefood, #arabefood, #chinafood').addClass('hidden');
        }else if(foodOption == "0"){
            $('#all').show();
            $('#venefood, #arabefood, #chinafood, #perufood').addClass('hidden');
       };
    });
});

