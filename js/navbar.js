(function () {

	'use strict'


	var siteMenuClone = function () {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');



		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function () {

			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

			var counter = 0;
			hasChildrens.forEach(hasChild => {

				var refEl = hasChild.querySelector('a');

				var newElSpan = document.createElement('span');
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// prepend equivalent to jquery
				hasChild.insertBefore(newElSpan, refEl);

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				arrowCollapse.setAttribute('data-toggle', 'collapse');
				arrowCollapse.setAttribute('data-target', '#collapseItem' + counter);


				counter++;
			});

		}, 1000);


		// Click js-menu-toggle

		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;

		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", () => {
				toggleOffcanvasMenu();
			});
		});

		var clonedMenuItems = document.querySelectorAll(".js-clone-nav a");

		clonedMenuItems.forEach(clonedMenuItem => {
			clonedMenuItem.addEventListener("click", () => {
				hideOffcanvasMenu();
			});
		});

		function toggleOffcanvasMenu() {
			var siteMobileMenu = document.querySelector(".site-mobile-menu");
			if (document.body.classList.contains('offcanvas-menu')) {
				document.body.classList.remove('offcanvas-menu');
				menuToggle.forEach(mtoggle => {
					mtoggle.classList.remove('active');
				});
				siteMobileMenu.style.transform = ''; // Remove the transform property
			} else {
				document.body.classList.add('offcanvas-menu');
				menuToggle.forEach(mtoggle => {
					mtoggle.classList.add('active');
				});
			}
		}

		function hideOffcanvasMenu() {
			var siteMobileMenu = document.querySelector(".site-mobile-menu");
			if (siteMobileMenu.classList.contains('offcanvas-menu')) {
				siteMobileMenu.classList.remove('offcanvas-menu');
				siteMobileMenu.style.transform = ''; // Remove the transform property
				menuToggle.forEach(mtoggle => {
					mtoggle.classList.remove('active');
				});
			}
		}





		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function (event) {
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				mt = mtoggle.contains(event.target);
			})

			if (!isClickInside && !mt) {
				if (document.body.classList.contains('offcanvas-menu')) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	};
	siteMenuClone();


})()