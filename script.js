flag=1
allert=1
function f1()
{
	if(allert==1)
		{
		alert("Yes. you are God damn right. ")
		allert=2
		}
	else if(allert==2)
		{
			alert("Hell yeah.")
			allert=3
		}
	else if(allert==3)
		{
			alert("Oh Yeah!")
			allert=1
		}
	
}
function f()
{
	if(flag==1)
		{
			Bn.style.top=90
			Bn.style.left=500
			flag=2
		}
	else if(flag==2)
		{
			Bn.style.top=90
			Bn.style.left=50
			flag=3
		}
	else if(flag==3)
	{
		Bn.style.top=250
		Bn.style.left=350
		flag=4
	}

	else if(flag==4)
		{
			Bn.style.top=100
			Bn.style.left=600
			flag=5
		}
		else if(flag==5)
		{
			Bn.style.top=250
			Bn.style.left=234
			flag=6
		}
		else if(flag==6)
		{
			Bn.style.top=224
			Bn.style.left=543	
			flag=7
		}
		else if(flag==7)
		{
			Bn.style.top=150;
			Bn.style.left=700;
			flag=1

		}		
}