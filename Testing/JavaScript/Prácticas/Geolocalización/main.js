function getLocation()
{
    var geo = document.getElementById("geo");
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        geo.innerHTML = "El navegador no soporta la geolocalización.";
    }
}

function showPosition(position)
{
    var geo = document.getElementById("geo");
    geo.innerHTML = "Latitud: " + position.coords.latitude
    + "<br>Longitud: " + position.coords.longitude;
}

/*
function showPosition(position)
{
    var geo = document.getElementById("geo");

    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    + latlon + "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    geo.innerHTML = "<img src='"+img_url+"'>";
}
*/