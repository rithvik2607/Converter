var heat = document.getElementById('heat');
var fromscale = document.getElementById('fromscale');
var toscale = document.getElementById('toscale');
var result = document.getElementById('result');
var form = document.getElementById('temp');

form.addEventListener('submit', function(event){

    if(!heat.value || !fromscale.value || !toscale.value)
    {
        alert("Please fill in all the fields");
    }
    else if(( fromscale.value === "f" || fromscale.value === "c" || fromscale.value === "k") && (toscale.value === "f" || toscale.value === "c" || toscale.value === "k"))
    {
     if(fromscale.value === "f" && toscale.value === "c" ){
        var x = parseFloat(heat.value);
        var y = 0.56*(x-32);
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === "c" && toscale.value === "f"){
        x = parseFloat(heat.value);
        var y = 1.8*(x + 32);
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === "c" && toscale.value === "k"){
        x = parseFloat(heat.value);
        var y = x + 273;
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === "k" && toscale.value === "c"){
        x = parseFloat(heat.value);
        var y = x - 273;
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === "f" && toscale.value === "k"){
        x = parseFloat(heat.value);
        var y = 0.56*(x - 32) + 273;
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === "k" && toscale.value === "f"){
        x = parseFloat(heat.value);
        var y = 1.8*(x - 273) + 32;
        var z = toscale.value;
        var u = z.toUpperCase();
        result.innerText = "Result: " + y + " " + u;
        event.preventDefault();
    }
    if(fromscale.value === toscale.value)
    {
        var z = toscale.value;
        var u = z.toUpperCase();
        alert("Aise kaise challega didi. Conversion ki zaroorat hi nahi. Result " + heat.value + " " + u + " hi hoga.");
    }
}
    else{
        alert("Are bhai bhai bhai bhai, input shai de do. Farenheit, Kelvin aur Celsius hi challega");
    }
});