$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$(".circlesmall").on("click", function (e) {
		e.preventDefault();

		var circle_clicked = $(this),
			text = circle_clicked.data("text"),
			popUp = circle_clicked.closest('.photo-container').find(".info_slides"),
			popUp_text = popUp.find(".info_popIn"); //find this pop up's text container

		popUp_text.text(text);
		popUp.addClass("active");
	});


	$(".circle").on("click", function (e) {
		e.preventDefault();

		var circle_clicked = $(this),
			text = circle_clicked.data("text"),
			popUp = circle_clicked.closest('.photo-container').find(".info_slides"),
			popUp_text = popUp.find(".info_popIn"); //find this pop up's text container

		popUp_text.text(text);
		popUp.addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();

		var close_button_clicked = $(this),
			popUp = close_button_clicked.closest(".info_slides");

		popUp.removeClass("active");
	});
});
