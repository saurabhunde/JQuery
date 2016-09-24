function validate()
{
var name=$('#name').val();
var age=$('#age').val();
var regname=new RegExp("^[A-Za-z]$");
var regage=new RegExp("^[0-9]{2}$");
console.log(regname.test(name));
if(!regname.test(name)){
$('#namemsg').html('*Name Invalid');
}
if(!regage.test(age)){
$('#agemsg').html('*Age Invalid');
}
}


