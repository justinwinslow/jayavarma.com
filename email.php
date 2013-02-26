<?php
	$name = $_REQUEST['name'] ;
	$email = $_REQUEST['email'] ;
	$msg = $_REQUEST['message'] ;
	//$validation_1 = $_REQUEST['form_contact_math'] ;
	$validation_2 = $_REQUEST['subject'] ;
	
	if(empty($validation_2)){
		mail( "jayakvarma@gmail.com", "JayaVarma.com Contact Form | From: $name", "$msg", "From: $email" );
	}else{
		echo "I don't think so.";
	}
?>