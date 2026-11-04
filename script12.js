function somme()
{
    var a = document.getElementById("t121").value;
    var b = document.getElementById("t122").value;
    var c = Number(a) + Number(b);
  
    document.getElementById("resultat").value=c;
}

function soustr()
{
    var a = document.getElementById("t121").value;
    var b = document.getElementById("t122").value;
    var c = Number(a) - Number(b);
  
    document.getElementById("resultat").value=c;
}

function multi()
{
    var a = document.getElementById("t121").value;
    var b = document.getElementById("t122").value;
    var c = Number(a) * Number(b);
  
    document.getElementById("resultat").value=c;
}

function divi()
{
    var a = document.getElementById("t121").value;
    var b = document.getElementById("t122").value;
    var c = Number(a) / Number(b);
  
    document.getElementById("resultat").value=c;
}

function permuter()
{
    let n1 = document.getElementById("t121").value;
    let n2 = document.getElementById("t122").value;

    let temp;

    temp = n1;
    n1 = n2;
    n2 = temp;

    document.getElementById("t121").value = n1;
    document.getElementById("t122").value = n2;
}

function parite()
{
    var x = document.getElementById("t121").value
    if (x % 2 ==0){
        document.getElementById("pair").value = " Paire "
    }
    else{
        document.getElementById("pair").value = " Impaire "
    }
}

function effacer()
{
    let n1 = document.getElementById("t121");
    let n2 = document.getElementById("t122");
    n1.value = "";
    n2.value = "";
    document.getElementById("resultat").value="";
    document.getElementById("pair").value="";

}
