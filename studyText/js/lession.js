var userClass = function () {
    var name;
    var getUersInfo = function () {

    }
}

function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("add"))
    {
        element.src="../images/minus_32.png";
    }
    else
    {
        element.src="../images/add_32.png";
    }
}

function btn_click() {
    // var text = document.getElementById('mybtn').innerText;
    // alert(text);

    document.getElementById('pid').innerText = "另外一行";
}