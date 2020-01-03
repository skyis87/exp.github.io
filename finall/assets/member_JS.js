$(function(){ //顯示密碼
	var $password = $('#password1'), 
		$passwordInput = $('<input type="text" name="' + $password.attr('name') + '" class="' + $password.attr('className') + '" />');
	$('#show_password').click(function(){
		if(this.checked){
			$password.replaceWith($passwordInput.val($password.val()));
		}else{
			$passwordInput.replaceWith($password.val($passwordInput.val()));
		}
	});
});


	function IsEmail(email) {

		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!regex.test(email)) {

		return false;

		}else{

		return true;

		}

		}
	
 $(document).ready(function(){ //檢查填寫資料
    $("#button").click(function(){
    	$Emailchecking=IsEmail($("#email").val());
        if($("#email").val()==""){
            alert("帳號欄位不可為空");
            eval("document.content1['email'].focus()");
        }else if($Emailchecking==false){
			alert("請填寫正確的E-MAIL格式");    
        }else if($("#password1").val()==""){
            alert("密碼欄位不可為空");            
		}else if($("#phone").val()==""){
			alert("手機欄位不可為空");
        }else{
        	alert("註冊成功")
            document.content1.submit();
            
        }
    })
    function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
	return false;
	}else{
	return true;
	}
	}


	$("#a1").click(function(){
 		$("#show1").show()
 		$("#show2").hide()
 		$("#show3").hide()
 		$("#show4").hide()
 	})
 	$("#a2").click(function(){
 		$("#show1").hide()
		$("#show2").show()
		$("#show3").hide()
		$("#show4").hide()
 	})
  	$("#a3").click(function(){
 		$("#show1").hide()
		$("#show2").hide()
		$("#show3").show()
		$("#show4").hide()
 	})
 	$("#a4").click(function(){
 		$("#show1").hide()
		$("#show2").hide()
		$("#show3").hide()
		$("#show4").show()
 	})


 })


