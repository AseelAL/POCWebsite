(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	/*$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});*/

})(jQuery);

function PrepareSystem() {

    $('.student').click(function () {
       

        
    });   

}
//Student

function GetStudent() {
    var urlRef = "http://localhost/School/StudendWS.asmx/GetStudents";

    $.ajax({
        type: 'POST',
        url: urlRef,
        //data: { maxSegmentsPerCategory: ReordsCountInOverviewMenu },
        dataType: 'xml',
        success: GetStudentSuccess,
        error: function (data) { alert('error'); },
    });
}


function GetStudentSuccess(data) {
    var dataResult = $.parseJSON($(data).text());
    console.log(dataResult);
}

//Student By class

function GetStudentByClass( ) {
    var urlRef = "http://localhost/School/StudendWS.asmx/GetStudentsByClass";

    $.ajax({
        type: 'POST',
        url: urlRef,
        data: { classID: 2 },
        dataType: 'xml',
        success: GetStudentSuccess,
        error: function (data) { alert('error'); },
    });
}


function GetStudentSuccess(data) {
    var dataResult = $.parseJSON($(data).text());
    console.log(dataResult);
}

//classes
function GetClass() {
    var urlRef = "http://localhost/School/StudendWS.asmx/GetClasses";

    $.ajax({
        type: 'POST',
        url: urlRef,
        //data: { maxSegmentsPerCategory: ReordsCountInOverviewMenu },
        dataType: 'xml',
        success: GetClassSuccess,
        error: function (data) { alert('error'); },
    });
}

function GetClassSuccess(data) {
    var dataResult = $.parseJSON($(data).text());
    console.log(dataResult);
}
