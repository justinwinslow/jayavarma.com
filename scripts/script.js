jv = {
	_init: function(){
		this._addListeners();
	},

	validateForm: function(){
		var form = document.form_contact,
			$form = $('form#form_contact'),
			email = $form.find('#email').val(),
			name = $form.find('#name').val(),
			message = $form.find('#message').val(),
			botCheck = $form.find('#subject').val();

		var checkEmail = function() {
			if(!email){
				return false;
			}

			var at = "@",
				dot = ".",
				lat = email.indexOf(at),
				lemail = email.length,
				ldot = email.indexOf(dot);

			if (email.indexOf(at)==-1){
			   return false;
			}

			if (email.indexOf(at)==-1 || email.indexOf(at)==0 || email.indexOf(at)==lemail){
			   return false;
			}

			if (email.indexOf(dot)==-1 || email.indexOf(dot)==0 || email.indexOf(dot)==lemail){
				return false;
			}

			if (email.indexOf(at,(lat+1))!=-1){
				return false;
			}

			if (email.substring(lat-1,lat)==dot || email.substring(lat+1,lat+2)==dot){
				return false;
			}

			if (email.indexOf(dot,(lat+2))==-1){
				return false;
			}

			if (email.indexOf(" ")!=-1){
				return false;
			}

			return true;		
		}();

		var appendError = function(error){
			$form.prepend('<p class="message error">' + error + '</p>');
		}

		$form.find('p.message').remove();

		if(!name){
			appendError('Please enter your name');
			$form.find('#name').focus();
			return false;
		}

		if(!email || checkEmail === false){
			appendError('A valid email address is required');
			$form.find('#email').focus();
			return false;
		}

		if(!message){
			appendError('No message provided');
			$form.find('#message').focus();
			return false;
		}

		return true;
	},

	_addListeners: function(){
		var that = this;

		$('a.internalLink').bind('click', function(e){
			e.preventDefault();

			var myOffset = $($(this).attr('href')).offset();

			console.log($(this).attr('href'));

			$('body').animate({ scrollTop: myOffset.top - 24 });
		});

		$('form#form_contact').bind('submit', function(e){
			e.preventDefault();
			
			var $form = $(this),
				name = $form.find('#name').val(),
				email = $form.find('#email').val(),
				message = $form.find('#message').val();
			
			//console.log('Submit form', that.validateForm(), {name: name, email: email, message: message});
			
			$.ajax({
				url: 'email.php',
				method: 'POST',
				data: {name: name, email: email, message: message},
				success: function(data){
					$form.replaceWith('<p>Thanks for getting in touch with me!');
				}
			});
		});
	}
}

$(document).ready(function(){
	jv._init();
});