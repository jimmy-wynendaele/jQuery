$('document').ready(function(){


	$('#send').on('click', function(event){

		event.preventDefault();

		$('input').each(function(){
			if($(this).val().length<5){
				window.alert('at least 5 charachters');
			}
		})

		if($('#mdp').val().length<5){
			

			$('#mdp').addClass('wrongInput');
			console.log('true');
			console.log($('#mdp').val());


		}else{

			if($('#mdp').val() === $('#mdp-confirm').val()){

				$('#mdp-confirm').addClass('correctInput');
				$('#mdp').addClass('correctInput');
				console.log('correct!');

			}else{

				console.log('false');
				$('#erreur').css('display','contents');
				$('#mdp').addClass('wrongInput');
				$('#mdp-confirm').addClass('wrongInput');
			
			}	
			
		}

		if(/[@]/.test($('#email').val())){
			console.log('valid email');
		}else{
			console.log('wrong email');
		}


	})
});

