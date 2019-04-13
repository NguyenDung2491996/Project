function checkName(){
	var name= document.getElementById('name').value;
	if (name=='') {
		document.getElementById('error').innerHTML="Yêu cầu nhập đầy đủ họ tên";
		flag1=false;
	}
	else if(!isNaN(name)){
		document.getElementById('error').innerHTML="Tên không chứa số";
		flag1= false;
	}
	else if(name.length<=8){
		document.getElementById('error').innerHTML="Họ tên phải lớn hơn 8 kí tự";
		flag1= false;
	}
	else{
		document.getElementById('error').innerHTML='';
		flag1= true;
	}
	enable(flag1,flag2,flag3,flag4);
}
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function checkMail(){
	var email=document.getElementById("mail").value;
	if (email=='') {
		document.getElementById('error1').innerHTML="Yêu cầu nhập email";
		flag2= false;
	}
	else if(!validateEmail(email)){
		document.getElementById('error1').innerHTML="Yêu cầu nhập đúng định dạng email";
		flag2= false;
	}
	else{
		document.getElementById('error1').innerHTML="";
		flag2= true;
	}
	enable(flag1,flag2,flag3,flag4);
}

var flag1,flag2 ,flag3,flag4;
function checkPhone(){
	var phone =document.getElementById('phone').value;
	var phoneno = /^\(?(09)\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	var phoneno1 = /^\(?(01)\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
	if (phone=='') {
		document.getElementById('error2').innerHTML="Yêu cầu nhập số điện thoại";
		flag3= false;
	}
	else if(phone.match(phoneno)||phone.match(phoneno1)){
		document.getElementById('error2').innerHTML="";
		flag3= true;
	}
	
	else{
		document.getElementById('error2').innerHTML="Số điện thoại không hợp lệ";
		flag3= false;
	}
	enable(flag1,flag2,flag3,flag4);

}
function checkMess(){
	var mess=document.getElementById("mess").value;
	if (mess.length==0) {
		document.getElementById("error3").innerHTML="Mess không được để trống";
		flag4=false;
	}
	else{
		document.getElementById("error3").innerHTML="";
		flag4=true;
	}
	enable(flag1,flag2,flag3,flag4);
}
function enable(a,b,c,d){
	if (a&&b&&c&&d) {

		document.getElementById('register').disabled=false;
	}
	else{
		document.getElementById('register').disabled=true;
	}
}
