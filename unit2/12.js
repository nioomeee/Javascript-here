function Calculate()
{
    let a = parseFloat(document.getElementById("mark1").value);
    let b = parseFloat(document.getElementById("mark2").value);
    let c = parseFloat(document.getElementById("mark3").value);
    let d = parseFloat(document.getElementById("mark4").value);
    let e = parseFloat(document.getElementById("mark5").value);
    
    let add = a+b+c+d+e;
    let result= Percentage(add);

    document.getElementById("percentage").innerText= "Your percenatage is: "+result;

    if(result<=35)
    {
        document.getElementById("pass").innerText = "FAIL";
    }
    else if(result<50 && result>35)
    {
        document.getElementById("pass").innerText = "AVERAGE";
    }
    else if(result>50 && result<60)
    {
        document.getElementById("pass").innerText = "SECOND_CLASS";
    }
    else if(result>60 && result<70)
    {
        document.getElementById("pass").innerText = "FIRST_CLASS";
    }
    else if(70<result)
    {
        document.getElementById("pass").innerText = "DISTINCTION";
    }
    
}
function Percentage(n)
{
    return (n/500)*100;
}