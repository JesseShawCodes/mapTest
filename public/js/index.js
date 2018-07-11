var key = "z9XYu29D14RwFZYrjn6p3b31SDQZMq27";

$("form").submit(function(e){
    e.preventDefault()
    var city = $(".city-input").val();
    var url = `<img src="https://www.mapquestapi.com/staticmap/v5/map?key=${key}&center=${city}&size=500,500@2x">`;
    $( ".result" ).html(url).show()
})

