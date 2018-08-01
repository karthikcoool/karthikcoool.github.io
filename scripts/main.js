var myHeading = document.querySelector('h1');
myHeading.textContent = 'KARTHIKs world!';
var myVar = setInterval(myTimer, 10000);
var i=0;
var k;
function myTimer()
{     if( i==1)
        {  alert("Welcome to Karthik's Kingdom");
	} 
 if( i==2)
        {  alert("Karthik is alone, call him ");
	   alert(" he he he just kidding, he is busy");
	} 
 if(i==4)
 {     alert("karthik is the Chairman of the company RPLTechno IT Services Pvt Ltd");
  
 }
  if(i==5)
 {       alert(" your mobile going to blast");
 }
  if(i==6)
 { i=0;
 }
 
	i++;

 
 

}
document.querySelector('button').onclick = function() {
    alert('Ouch! Stop poking me!');
}

}
