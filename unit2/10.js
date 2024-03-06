function Faren()
        {
            let a = parseFloat(document.getElementById("Far").value);

            let C = (a-32)*(5/9);
            document.write("The temperature in Celcius is: "+C);
            
        }