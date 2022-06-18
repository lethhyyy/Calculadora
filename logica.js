function Exibir(operacao)
{
    var n1 = document.getElementById("txtn1").value; 
    var n2 = document.getElementById("txtn2").value; 
    
	if (isNaN(n1)||(n1==""))
    {

        alert ("Idiota, escreva somente números")
        document.getElementById("txtn1").value="";
        document.getElementById("txtn1").focus(); 
    }

    else if (isNaN(n2)||(n2==""))
    {
		alert ("Idiota, escreva somente números");
		document.getElementById("txtn2").value ="";
		document.getElementById("txtn2").focus();
	}
	
	else 
	{
		n1= parseFloat(n1);
		n2= parseFloat(n2);
		document.getElementById("txtresult").value = conta(n1,n2,operacao);
	}
}

function conta (n1, n2, ope)
{
	
	var resultado; 
	switch(ope)
	{
		case 1:
        {
            resultado = n1+n2; 
            break; 
        }
			
        case 2:
        {
            resultado = n1-n2; 
            break; 
        }
			
        case 3:
        {
            resultado = n1*n2; 
            break; 
        }
			
        default:
        {
			if(n2==0)
            {
                alert ("Idiota, escreva somente números");
                document.getElementById("txtn2").value="";
                document.getElementById("txtn2").focus();
            }
                
            
            else 
			{
				resultado = n1/n2; 
            }
		}
    }
	return result; 
}
	
function Limpar()
{
	document.getElementById("txtn1n1").focus();
}