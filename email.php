<?php
	# Include the Autoloader (see "Libraries" for install instructions)
	require 'vendor/autoload.php';
	use Mailgun\Mailgun;

	# Instantiate the client.
	$mgClient = new Mailgun('key-27u8fvlqultyil204j3aesrl1rkeoc10');
	$domain = 'jayavarma.com';

	$name = $_REQUEST['name'] ;
	$email = $_REQUEST['email'] ;
	$msg = $_REQUEST['message'] ;
	//$validation_1 = $_REQUEST['form_contact_math'] ;
	$validation_2 = $_REQUEST['subject'] ;

	if(empty($validation_2)){
		# Make the call to the client.
		$result = $mgClient->sendMessage("$domain",
                  array('from'    => '$name <$email>',
                        'to'      => 'jusrwin@gmail.com', #jayakvarma@gmail.com
                        'subject' => 'JayaVarma.com Contact Form | From: $name',
                        'text'    => '$msg'));
	}else{
		echo "I don't think so.";
	}
?>
