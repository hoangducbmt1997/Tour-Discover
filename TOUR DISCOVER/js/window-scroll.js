window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
				document.getElementById("nav-below").style.position ="fixed";
				document.getElementById("nav-below").style.top ="0px";
				//document.getElementById("bg-nav-show").style.visibility ="hidden";
			} else {
				document.getElementById("nav-below").style.top ="80px";
				document.getElementById("nav-below").style.visibility ="visible";
			}
		}