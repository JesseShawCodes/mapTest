var key = "z9XYu29D14RwFZYrjn6p3b31SDQZMq27";

$("form").submit(function(e){
    e.preventDefault()
    var streetAddress = $(".street-input").val().split(' ').join('+');
    var city = $(".city-input").val().split(' ').join('+');
    var state = $(".state-input").val().split(' ').join('+');
    var zip = $(".zip-input").val();
    var completeAddress = `${streetAddress}%2C+${city}%2C+${state}+${zip}`;
    var cityReplaced = city.split(' ').join('+');
    var url = `<img src="https://www.mapquestapi.com/staticmap/v5/map?key=${key}&center=${cityReplaced}&size=300,300@2x">`;
    var metaUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&inFormat=kvp&outFormat=json&location=${completeAddress}&thumbMaps=false`
    $.get(`${metaUrl}`, function(data, status){
        let lat = data.results["0"].locations["0"].latLng.lat
        let lng = data.results["0"].locations["0"].latLng.lng
        $(".result").html(`
            lat: ${lat}, lng: ${lng}
            <br>
            ${url}
        `)
        console.log(`status: ${status}`)
    });

})

