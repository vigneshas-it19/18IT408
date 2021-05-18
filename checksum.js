function flip(a)
  {
	if(a=='0')
	{
		return '1';
	}
	else
	{
		return '0';
	}
  }		
  function check(str)

  {

	var arr1 = [];
	
	for (var n = 0, l = str.length; n < l; n=n+2) 
     	{
		var hex = Number(str.charCodeAt(n)).toString(16);
		var hex1 = Number(str.charCodeAt(n+1)).toString(16);
		arr1.push(hex+hex1);
	}
	//arr1.push("1C4D");
	var r=0;
	for(var i=0;i<arr1.length;i++)
	{
		r=(parseInt(r, 16)+parseInt(arr1[i], 16)).toString(16);
	}
	var out = "";
	for(var i=0;i<r.length;i++)
	{
		var bin = (parseInt(r[i], 16).toString(2)).padStart(4, '0');
		var t="";
		for(var j=0;j<bin.length;j++)
		{
			t=t+flip(bin[j]);
		}
		out = out+parseInt(t, 2).toString(16)
	}
	return out.toUpperCase();
   }
   function checksum(X)
   {
	document.getElementById("output").innerHTML = "Checksum is "+check(X);
   }


function Rcheck(str,gen)

  {

	var arr1 = [];
	
	for (var n = 0, l = str.length; n < l; n=n+2) 
     	{
		var hex = Number(str.charCodeAt(n)).toString(16);
		var hex1 = Number(str.charCodeAt(n+1)).toString(16);
		arr1.push(hex+hex1);
	}
	arr1.push(gen);
	var r=0;
	for(var i=0;i<arr1.length;i++)
	{
		r=(parseInt(r, 16)+parseInt(arr1[i], 16)).toString(16);
	}
	var out = "";
	for(var i=0;i<r.length;i++)
	{
		var bin = (parseInt(r[i], 16).toString(2)).padStart(4, '0');
		var t="";
		for(var j=0;j<bin.length;j++)
		{
			t=t+flip(bin[j]);
		}
		out = out+parseInt(t, 2).toString(16)
	}
	return out.toUpperCase();
   }
function rchecksum(X,y)
   {
	if(parseInt(Rcheck(X,y))==0)
    	{
		document.getElementById("routput").innerHTML = "Therefore, the ChesckSum("+Rcheck(X,y)+") is all zeros. Hence, the data received has no error.";
    	}
    	else
    	{
		document.getElementById("routput").innerHTML = "Since the ChesckSum("+Rcheck(X,y)+") is not all zeroes, the error is detected at the receiver side.";
    	}
   }

