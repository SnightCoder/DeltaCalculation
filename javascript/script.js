var s,s1,a,b,c,A,B,C,D1,D2,d,x1,x2;
let clear="",defaults="Phần mềm tính ax² + bx + c = 0";
document.getElementById("result").innerHTML=defaults;
function clickTinh(){
  a=document.getElementById("in1").value;
  b=document.getElementById("in2").value;
  c=document.getElementById("in3").value;
  tinhDelta(a,b,c,"result");
}
function clearClick(){
  document.getElementById("in1").value=clear;
document.getElementById("in2").value=clear;
document.getElementById("in3").value=clear;
document.getElementById("result").innerHTML=defaults;
}
function tinhDelta(a,b,c,id){
  a=Number(a);
  b=Number(b);
  c=Number(c);
  A=checkMinus(a);
  B=checkMinus(b);
  C=checkMinus(c);
  d=(b*b);
  s="Δ = b² - 4ac"+"<br>";
  s+="Δ = "+B+"² - 4 x "+A+" x "+C+"<br>";
  s1=4*a*c;
  if(s1>0)
  s+="Δ = "+b*b+" - "+s1+"<br>";
  else if(s1<0)
  s+="Δ = "+b*b+" + "+Math.abs(s1)+"<br>";
  d=d-s1;
  s+="Δ = "+d+"<br>";
  if(d<0)
  s+="Do Δ < 0 => Phương trình vô nghiệm";
 else {
  B=checkMinus(-b);
  C=checkMinus(2*a);
   if(d==0){
    x1=-(b)/(2*a);
    s1=B+"/(2 x "+A+") = "+B+"/"+C;
  s+="Do Δ = 0 => Phương trình có 2 nghiệm kép:<br>x1 = x2 = "+"-b/2a = "+s1+" = <span class=\"result\">"+x1+"</span>";
  }
  else if(d>0){
    D1=checkMinus(-b-Math.sqrt(d));
    D2=checkMinus(-b+Math.sqrt(d));
    x1="x1 = (-b-√Δ)/(2a) = ("+B+"-√"+d+")/(2 x "+A+") = "+D1+"/"+C+" =<span class=\"result\"> "+(-b-Math.sqrt(d))/(2*a)+"</span>";
    x2="x2 = (-b+√Δ)/(2a) = ("+B+"+√"+d+")/(2 x "+A+") = "+D2+"/"+C+" =<span class=\"result\">  "+(-b+Math.sqrt(d))/(2*a)+"</span>";
   s+="Do Δ > 0 => Phương trình có 2 nghiệm phân biệt:<br>"+x1+"<br>"+x2;
}
}
  document.getElementById(id).innerHTML=s;
}
function checkMinus(number){
  if(number>0)number=number; else if(number<0)number="("+number+")";
  return number;
}
