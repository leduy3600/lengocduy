// JavaScript Document
      var swiper = new Swiper(".mySwiper", {
          sliderPerView: 3,
		  loop: true,
		  spaceBetween: 40,
		  autoplay: {
			  delay: 4000,
			  disableOnInteraction: false,
		  },
		  breakpoints: {
			  0: {
				  slidersPerView: 1,
			  },
			  550: {
				  slidersPerView: 2,
			  },
			  800: {
				  slidersPerView: 3,
			  },
			  1000: {
				  slidersPerView: 3,
			  },
		  },
		  pagination: {
		  e1: ".swiper-pagination",
		  clickable: true,
	  	},
		  navigation: {
			  nextE1: "swiper-button-next",
			  prevE1: "swiper-button-prev",
		  },
	  });