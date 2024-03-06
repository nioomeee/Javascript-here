function Farenheit_Celcius()
            {
                let farenheit = parseFloat(document.getElementById("Farenheit").value);
                let celcius = (5/9)*(farenheit-32);

                document.getElementById("result").innerText = farenheit+" farenheit in Celcius is: "+celcius.toFixed(2);
            }