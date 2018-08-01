var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myVar = setInterval(myTimer, 10000);
var i=0;
var k;
function myTimer()
{   
	 alert(i);

 i++;
 

}
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}