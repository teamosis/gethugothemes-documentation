// Preloader js  
function preloader() {
	$('.preloader').delay(100).fadeOut(10);
}
$(preloader);
$(document).on("turbolinks:load", preloader);

(function ($) {
	'use strict';

	// scroll function
	$(window).scroll(function () {
		// navfixed
		if ($('.navigation').offset().top > 50) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		};

		// search add for homepage
		var height = $('#banner').innerHeight();
		if ($('.navigation').offset().top > height) {
			$('.search-wrapper').addClass('search-sticky');
			$('.navigation').addClass('nav-bg-home');
		} else {
			$('.search-wrapper').removeClass('search-sticky');
			$('.navigation').removeClass('nav-bg-home');
		};
	});

	// masonry
	setTimeout(function () {
		$('.masonry-wrapper').masonry({
			columnWidth: 1
		});
	}, 1500);

	// Get Parameters from some url
	var getUrlParameter = function getUrlParameter(sPageURL) {
		var url = sPageURL.split('?');
		var obj = {};
		if (url.length == 2) {
			var sURLVariables = url[1].split('&'),
				sParameterName,
				i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');
				obj[sParameterName[0]] = sParameterName[1];
			}
			return obj;
		} else {
			return undefined;
		}
	};

	// Execute actions on images generated from Markdown pages
	var images = $(".content img").not(".inline");
	// Wrap image inside a featherlight (to get a full size view in a popup)
	images.wrap(function () {
		var image = $(this);
		if (!image.parent("a").length) {
			return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
		}
	});

	// Change styles, depending on parameters set to the image
	images.each(function (index) {
		var image = $(this)
		var o = getUrlParameter(image[0].src);
		if (typeof o !== "undefined") {
			var h = o["height"];
			var w = o["width"];
			var c = o["classes"];
			image.css("width", function () {
				if (typeof w !== "undefined") {
					return w;
				} else {
					return "auto";
				}
			});
			image.css("height", function () {
				if (typeof h !== "undefined") {
					return h;
				} else {
					return "auto";
				}
			});
			if (typeof c !== "undefined") {
				var classes = c.split(',');
				for (i = 0; i < classes.length; i++) {
					image.addClass(classes[i]);
				}
			}
		}
	});


	// tab
	$('.tab-content').find('.tab-pane').each(function (idx, item) {
		var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
			title = $(this).attr('title');
		navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
	});

	$('.code-tabs ul.nav-tabs').each(function () {
		$(this).find("li:first").addClass('active');
	})

	$('.code-tabs .tab-content').each(function () {
		$(this).find("div:first").addClass('active');
	});

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest('.code-tabs'),
			tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
		tabPanel.find('.active').removeClass('active');
		tab.addClass('active');
		tabPane.addClass('active');
	});



	// clipboard
	var clipInit = false;
	$('code').each(function () {
		var code = $(this),
			text = code.text();
		if (text.length > 2) {
			if (!clipInit) {
				var text, clip = new ClipboardJS('.copy-to-clipboard', {
					text: function (trigger) {
						text = $(trigger).prev('code').text();
						return text.replace(/^\$\s/gm, '');
					}
				});
				clipInit = true;
			}
			code.after('<span class="copy-to-clipboard">copy</span>');
		}
	});
	$('.copy-to-clipboard').click(function () {
		$(this).html('copied');
	});

	// search
	$('#search-by').keyup(function () {
		if (this.value) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})

	// featherlight
	$(function () {
		$('a[rel="lightbox"]').featherlight({
			root: 'body.content'
		});
	});

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});

	// table of content

	var containerEl = document.querySelector('#TableOfContents');
	if (containerEl) {
		new ScrollMenu('#TableOfContents a', {
			duration: 400,
			activeOffset: -110,
			scrollOffset: -115,
		})
	}

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	var html_body = $('html, body');
	$('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 95
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

})(jQuery);