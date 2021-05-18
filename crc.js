function  toBin(num){
    var bin = "";
    while (num){
        if (num & 1)
            bin = "1" + bin;
        else
            bin = "0" + bin;
        num = num>>1;
    }
    return bin;
}
function  toDec(bin){
    var num = 0;
    for (var i=0; i<bin.length; i++){
        if (bin[i]=='1')
            num += 1 << (bin.length - i - 1);
    }
    return num;
}
function CRC(){  
    var dataword = document.getElementById("data").value;
    var generator= document.getElementById("gen").value;
    var l_gen = generator.length;
    var gen = toDec(generator);
    var dword = toDec(dataword);
    var dividend = dword << (l_gen-1);      
 
    var shft = parseInt(Math.ceil(Math.log2(dividend+1)) - l_gen); 
    var rem;
    while ((dividend >= gen) || (shft >= 0)){
 
        rem = (dividend >> shft) ^ gen;               
        dividend = (dividend & ((1 << shft) - 1)) | (rem << shft);
 
        shft = parseInt(Math.ceil(Math.log2(dividend + 1)) - l_gen);
    }
    var codeword = (dword << (l_gen - 1)) | dividend;
    var crc = toBin(codeword);
    var remainder = crc.slice(dataword.length, crc.length); 
    document.getElementById("output").innerHTML = "The remainder is "+remainder+" and hence the encoded data sent is "+crc+" .";  
}  
function RCRC(){  
    var dataword = document.getElementById("cdata").value;
    var generator= document.getElementById("cgen").value;
    var l_gen = generator.length;
    var gen = toDec(generator);
    var dword = toDec(dataword);
    var dividend = dword << (l_gen-1);      
 
    var shft = parseInt(Math.ceil(Math.log2(dividend+1)) - l_gen); 
    var rem;
    while ((dividend >= gen) || (shft >= 0)){
 
        rem = (dividend >> shft) ^ gen;               
        dividend = (dividend & ((1 << shft) - 1)) | (rem << shft);
 
        shft = parseInt(Math.ceil(Math.log2(dividend + 1)) - l_gen);
    }
    var codeword = (dword << (l_gen - 1)) | dividend;
    var crc = toBin(codeword);
    var remainder = crc.slice(dataword.length, crc.length); 
    if(parseInt(remainder)==0)
    {
	document.getElementById("routput").innerHTML = "Therefore, the remainder("+remainder+") is all zeros. Hence, the data received has no error.";
    }
    else
    {
	document.getElementById("routput").innerHTML = "Since the remainder("+remainder+") is not all zeroes, the error is detected at the receiver side.";
    }
}  