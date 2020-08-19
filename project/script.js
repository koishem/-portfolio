$(document).ready(function(){
	$(document).ready(function(){
		$.get('http://data.fixer.io/api/latest?access_key=034bd381befc60189bfcc42d64b2d090',
			function(response){
				console.log(response)

				let dollar = response.rates.USD,
					euro = response.rates.EUR,
					rub = response.rates.RUB,
					rubd = rub / dollar,
					rube = rub / euro;

					rubd = rubd.toFixed(2);
					rube = rube.toFixed(2);

					$('.cash').append(`
						<h3>USD = ${rubd}</h3>
						<h3>EUR = ${rube}</h3>`);
			});

				$('.menu-button').click(function() {
					$('.menu-button').toggleClass('close');
					$('.header-menu').toggleClass('active');
					$('.popup').toggleClass('active');
					$("html,body").toggleClass("stopscroll");
					$("body").toggleClass("fixed");
					
			});

			function FixLogo(){
				if($(window).width()<768){
				if($(window).scrollTop()>55){
					$('.logo-container').css({
						'position':'fixed',
						'z-index':'50',
						'background-color':'white',
						'padding':'10px',
						'top':'0px',
						'margin':'0'
					});
					$('.popup').css({
						'position':'fixed',
						'top':'47px'
					});
					$('.header-menu').css({
						'height':'100%'
					});
				}else{
					$('.logo-container').css({
						'position':'relative',
					});
					$('.popup').css({
						'position':'relative',
						'top':'0'
					});
				}
			}
		}
			$(window).scroll(FixLogo);
			FixLogo();
	});



				let flag = 0;


					if(flag==0){
							$('.icon').click(function(e){
							e.preventDefault();
									$('.searchinput').toggleClass('active__search');
									$("input[type='text']").focus();
						flag=1;
						});
					}

					else{
						$(this).submit(function(){
							alert("я костя");
							flag=2;
							});
					}
				});
