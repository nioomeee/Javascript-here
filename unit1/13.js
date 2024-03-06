function Bold()
{
    let text = document.getElementById("text").value;
    
    document.write(text.bold());
}

function italics()
{
    let text = document.getElementById("text").value;
    
    document.write(text.italics());
}

function Uppercase()
{
    let text = document.getElementById("text").value;
    
    document.write(text.toUpperCase());
}

function Lowercase()
{
    let text = document.getElementById("text").value;
    
    document.write(text.toLowerCase());
}

function CharAt()
{
    let text = document.getElementById("text").value;
    let index = parseInt(document.getElementById("char").value);

    if(!isNaN(index) && index > 0)
    {
        document.write("Character at "+index+": "+text.charAt(index));
    }
    else
    {
        alert("Invalid index");
    }
}

function Substring()
{
    let text = document.getElementById("text").value;
    let index = parseInt(document.getElementById("char").value);

    if(!isNaN(index) && index > 0)
    {
        document.write("Substring from  "+index+": "+text.substring(index));
    }
    else
    {
        alert("Invalid index");
    }
}

