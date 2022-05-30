let a=prompt("Ismingizni kiriting");
let b=prompt("Hozirgi yilni kiriting");
let c=prompt("Tug'ilgan yilingizni kiriting");
function myFunction(ism, hozirgi_yil, Tugilgan_yili){
    ism=a;
    hozirgi_yil=b;
    Tugilgan_yili=c;
    alert(ism+" ,sizning yoshingiz "+(b-c));
}
myFunction(a,b,c);