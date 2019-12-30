var num = document.getElementById('num');
var frombase = document.getElementById('frombase');
var tobase = document.getElementById('tobase');
var result = document.getElementById('result');
var form = document.getElementById('base');

form.addEventListener('submit', function(event){

    if( !num.value || !frombase.value || !tobase.value )
    {
        alert("Please fill in all the fields");
    }
    else if( (frombase.value === "10" || frombase.value === "2" || frombase.value === "8" || frombase.value === "16") && (tobase.value === "10" || tobase.value === "2" || tobase.value === "8" || tobase.value === "16"))
    {
        if( frombase.value === "10" && tobase.value === "2")
        {
            var n = parseInt(num.value , 10).toString(2);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "10" && tobase.value === "8")
        {
            var n = parseInt(num.value , 10).toString(8);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "10" && tobase.value === "16")
        {
            var n = parseInt(num.value , 10).toString(16);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "2" && tobase.value === "10")
        {
            var n = parseInt(num.value , 2);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "2" && tobase.value === "8")
        {
            var n = parseInt(num.value , 2).toString(8);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "2" && tobase.value === "16")
        {
            var n = parseInt(num.value , 2).toString(16);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "8" && tobase.value === "10")
        {
            var n = parseInt(num.value , 8);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "8" && tobase.value === "2")
        {
            var n = parseInt(num.value , 8).toString(2);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "8" && tobase.value === "16")
        {
            var n = parseInt(num.value , 8).toString(16);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "16" && tobase.value === "10")
        {
            var n = parseInt(num.value , 16);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "16" && tobase.value === "2")
        {
            var n = parseInt(num.value , 16).toString(2);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === "16" && tobase.value === "8")
        {
            var n = parseInt(num.value , 16).toString(8);
            result.innerText = "Result: " + n;
            event.preventDefault();
        }
        if( frombase.value === tobase.value)
        {
            alert("Aise kaise challega didi. Conversion ki zaroorat hi nahi. Result " + num.value + " hi hoga.");
        }
    }
    else
    {
        alert("Are bhai bhai bhai bhai, input shai de do. Binary, Hexadecimal, Octal aur Decimal hi challega");
    }
});