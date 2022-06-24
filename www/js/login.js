/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$("#btnRegister").click(function() {
    location.href = "register.html";
});

$("#frmLogin").submit(function(e){
    e.preventDefault();
    e.stopPropogation();
    var email = $("#inputEmail").val();
    var pass = $("#inputPass").val();
    
    var datalist = "inputEmail=" + email + "&inputPassword=" + pass;
    
    var datalist = "inputEmail=" + email + "&inputPassword=" + pass1;
    
    $.ajax({
        type:"post",
        url:"Login",
        data: datalist,
        cache: false,
        success: function(myData){
            var myData = JSON.parse(mydata);
            if(myData.status == 1) {
                sessionStorage.ttoken = email;
                location.href = "index.html";
            } 
            else {
                alert ("Wrong Username or password");
            }
        },
        error: function() {
            console.log("ajax error!");
            alert("Please contact admin!");
        }
    });
});
