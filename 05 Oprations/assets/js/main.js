var x = 75;
var y = 25;
var x1 = 24;

var z = x + y;
console.log(z);
var z = x - y;
console.log(z);
var z = x * y;
console.log(z);
var z = x/y;
console.log(z);
var z = x%x1;
console.log(z);

var a = "hallo"
var z = x + y + a;
console.log(z);
var z = x - a;
console.log(z);
var z = x * a;
console.log(z);
var z = x / a;
console.log(z);

var a = "25";
var z = x + a;
console.log(z);
var z = x - a;
console.log(z);
var z = x*a;
console.log(z);
var z = x/a;
console.log(z);

var x = 49;
var y = 11;

var x = ++x;
console.log(x);
y += x;
console.log(y);
y *= 2;
console.log(y);
y %= x;
console.log(y);
y /= x;
console.log(y);

var p = 15;
var q = 74;
var r = 15;
var s = "15";
var t = "74";

var result = (p>q);
console.log(result);
var result = (p<q);
console.log(result);
var result = (p==s);
console.log(result);
var result = (p===s);
console.log(result);
var result = (p<=q);
console.log(result);
var result =(t>=q);
console.log(result);
var result =(p != r);
console.log(result);
var result = (p != q);
console.log(result);
var p = 15;
var q = 74;
var r = 15;
var s = "15";
var t = "74";

var result = (p>=s)&&(t<=p);
console.log(result);
var result = (r<=t)&&(p<=r);
console.log(result);
var result = (q>r)&&(p===s);
console.log(result);
var result = (p!=q)&&(p<=t);
console.log(result);
var result = (p!=t)||(r<q);
console.log(result);
var result = (q>=t)||(q>r);
console.log(result);
var result = (p===s)||(p<=r);
console.log(result);