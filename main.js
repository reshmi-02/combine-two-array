var a=[];
var size=prompt("enter the size of the array");
for(let i=0;i<size;i++){
	a[i]=prompt("enter the"+(i+1)+"value");
}
document.write("a="+a+"<br>"+"<br>");


var b=[];
var size=prompt("enter the size of the array");
for(let i=0;i<size;i++){
	b[i]=prompt("enter the"+(i+1)+"value");
}
document.write("b="+b+"<br>"+"<br>");

var c=a.concat(b);
document.write("combination of two array is"+"<br>"+"<br>"+c);