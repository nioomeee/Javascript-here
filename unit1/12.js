function calculatePercentage()
{
    let a = parseInt(document.getElementById("Maths").value);
    let b = parseInt(document.getElementById("Science").value);
    let c = parseInt(document.getElementById("SS").value);
    let d = parseInt(document.getElementById("English").value);
    let e = parseInt(document.getElementById("Computer").value);

    let percentage = (a+b+c+d+e)/5;

    document.getElementById("Percentage").innerText = "The percentage you secured: "+percentage+"%.";

    if (percentage < 35) 
        {
            document.getElementById("Grade").innerText = "Fail";
        }
    else if(percentage > 35 && percentage < 50)
    {
        document.getElementById("Grade").innerText = "Average";
    }
    else if(percentage > 50 && percentage < 60)
    {
        document.getElementById("Grade").innerText = "Second class";
    }
    else if(percentage > 60 && percentage < 70)
    {
        document.getElementById("Grade").innerText = "First Class";
    }
    else
    {
        document.getElementById("Grade").innerText = "Distinction";
    }

}
// 35< Fail
// 35>average
// 50>second class
// 60>First class
// 70>Distinction
