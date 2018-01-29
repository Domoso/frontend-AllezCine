// Landing modal

// $(window).load(function() {
// 			$("#age").modal("show");
// 		});
// $("#age").modal({
// 	backdrop: "static",
// 	keyboard: false
// })
//Library  creation

function Movie(title, id, gender, cover, year, trailer, price) {
	this.title = title;
	this.id = id;
	this.gender = gender;
	this.cover = cover;
	this.year = year;
	this.trailer = trailer;
	this.price = price;
};

const libraryMovie = [
	new Movie("Lego Batman","Lego_Batman", "comedy", "assets/image/thumbnail/batmanmovie-2017-comedie.jpg" , 2017,'<iframe src="https://www.youtube.com/embed/iMdQXYQ_MD8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Hostel","Hostel","thriller","assets/image/thumbnail/hostel-2005-thriller.jpg", 2005,'<iframe src="https://www.youtube.com/embed/4d5_lrn9v-g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Inception","Inception","thriller","assets/image/thumbnail/inception-2010-scifi.jpg",2010,'<iframe src="https://www.youtube.com/embed/8hP9D6kZseM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Intouchables","Intouchables","comedy","assets/image/thumbnail/intouchables-2011-comedie.jpg",2011,'<iframe src="https://www.youtube.com/embed/cXu2MhWYUuE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Le Patient Anglais","Le_Patient_Anglais","drama","assets/image/thumbnail/lepatientanglais-1996-dramatique.jpg",1996,'<iframe src="https://www.youtube.com/embed/Xk_LRcOFT0c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("The Two Towers","The_Two_Towers","fantastic","assets/image/thumbnail/lesdeuxtours-2002-aventure.jpg",2002,'<iframe src="https://www.youtube.com/embed/ve5HZfrrUqc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Seven","Seven","thriller", "assets/image/thumbnail/seven-1995-thriller.jpg" ,1995,'<iframe src="https://www.youtube.com/embed/vr3UZ-axauU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Shutter Island","Shutter_Island","thriller","assets/image/thumbnail/shutterisland-2010-thriller.jpg", 2010,'<iframe src="https://www.youtube.com/embed/lhBTlYQcBC0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Star Wars II: The Empire Strikes Back","Star_Wars_II", "scifi","assets/image/thumbnail/starwarsempire-1980-scifi.jpg",1980,'<iframe src="https://www.youtube.com/embed/JNwNXF9Y6kY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Survive Style 5","Survive_Style_5","comedy","assets/image/thumbnail/Survivestyle5-2004-comedie.jpg",2004,'<iframe src="https://www.youtube.com/embed/LEH7nDkiPEk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Swiss Army Man","Swiss_Army_Man","comedy", "assets/image/thumbnail/swissarmyman-2016-comedie.jpg" ,2016,'<iframe src="https://www.youtube.com/embed/yrK1f4TsQfM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("The Fall","The_Fall","drama","assets/image/thumbnail/thefall-2006-dramatique.jpg",2006,'<iframe src="https://www.youtube.com/embed/dyFrBC1rAcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("What We Do In The Shadows","What_We_Do_In_The_Shadows","comedy","assets/image/thumbnail/WhatWeDoInTheShadows-2014-comedie.jpg",2014,'<iframe src="https://www.youtube.com/embed/IAZEWtyhpes" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Zoolander","Zoolander","comedy","assets/image/thumbnail/zoolander-2001-comedie.jpg",2001,'<iframe src="https://www.youtube.com/embed/YtQq0T3ExLs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Baby Driver","Baby_Driver","thriller","assets/image/thumbnail/baby-driver.jpg", 2017,'<iframe src="https://www.youtube.com/embed/z2z857RSfhk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Coco","Coco","Comedy","assets/image/thumbnail/coco.jpg", 2017,'<iframe src="https://www.youtube.com/embed/zNCz4mQzfEI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Get Out","Get_Out","Thriller","assets/image/thumbnail/getout.jpg", 2017,'<iframe src="https://www.youtube.com/embed/xM1YpntE840" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Blade Runner","Blade_Runner","scifi","assets/image/thumbnail/bladerunner.jpg", 2017,'<iframe src="https://www.youtube.com/embed/gCcx85zbxz4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Dunkerque","Dunkerque","drama","assets/image/thumbnail/dunkerque.jpg", 2017,'<iframe src="https://www.youtube.com/embed/F-eMt3SrfFU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Star Wars: the last Jedis","Star_Wars_VIII","scifi","assets/image/thumbnail/LastJedi-1.jpg", 2017,'<iframe src="https://www.youtube.com/embed/Q0CbN8sfihY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Logan","Logan","scifi","assets/image/thumbnail/logan.jpg", 2017,'<iframe src="https://www.youtube.com/embed/Div0iP65aZo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Phantom Thread","Phantom_Thread","drama","assets/image/thumbnail/phantomthread.jpg", 2017,'<iframe src="https://www.youtube.com/embed/xNsiQMeSvMk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("The Post","The_Post","thriller","assets/image/thumbnail/the-post.jpg", 2017,'<iframe src="https://www.youtube.com/embed/nrXlY6gzTTM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$"),
	new Movie("Wonder Woman","Wonder_Woman","fantastic","assets/image/thumbnail/wonderwoman.jpg", 2017,'<iframe src="https://www.youtube.com/embed/VSB4wGIdDwo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "7$")
];

function Serie(title, gender, cover, trailer, price) {
	this.title = title;
	this.gender = gender;
	this.cover = cover;
	this.trailer = trailer;
	this.price = price;
};

const librarySerie = [
	new Serie("Archer","polar","assets/image/thumbnail/séries/Archer.jpg",'<iframe src="https://www.youtube.com/embed/GV_QT9wUVwA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Breaking Bad","thriller","assets/image/thumbnail/séries/BreakingBad.jpg",'<iframe src="https://www.youtube.com/embed/lrcqbavlbyQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Dexter","polar","assets/image/thumbnail/séries/Dexter.jpg",'<iframe src="https://www.youtube.com/embed/YQeUmSD1c3g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Friends","comedy","assets/image/thumbnail/séries/Friends.jpg",'<iframe src="https://www.youtube.com/embed/hDNNmeeJs1Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Game of Thrones","fantastic","assets/image/thumbnail/séries/GameofThrones.jpg",'<iframe src="https://www.youtube.com/embed/giYeaKsXnsI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Gotham","polar","assets/image/thumbnail/séries/Gotham.jpg",'<iframe src="https://www.youtube.com/embed/ysfvCuhoj-k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Heroes","scifi","assets/image/thumbnail/séries/Heroes.jpg",'<iframe src="https://www.youtube.com/embed/9AX6aXFdTkc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("House","comedy","assets/image/thumbnail/séries/House.jpg",'<iframe src="https://www.youtube.com/embed/MczMB8nU1sY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("How I Met Your Mother","comedy","assets/image/thumbnail/séries/HowIMetYourMother.jpg",'<iframe src="https://www.youtube.com/embed/yOe4_kdqsmU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Lost","fantastic","assets/image/thumbnail/séries/Lost.jpg",'<iframe src="https://www.youtube.com/embed/KTu8iDynwNc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Marco Polo","adventure","assets/image/thumbnail/séries/MarcoPolo.jpg",'<iframe src="https://www.youtube.com/embed/hB-ltNasHVw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Daredevil","fantastic","assets/image/thumbnail/séries/MarvelsDaredevil.jpg",'<iframe src="https://www.youtube.com/embed/jAy6NJ_D5vU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Narcos","polar","assets/image/thumbnail/séries/Narcos.jpg",'<iframe src="https://www.youtube.com/embed/U7elNhHwgBU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Peaky Blinders","polar","assets/image/thumbnail/séries/PeakyBlinders.jpg",'<iframe src="https://www.youtube.com/embed/JwXfVGjSz-4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Penny Dreadful","fantastic","assets/image/thumbnail/séries/PennyDreadful.jpg",'<iframe src="https://www.youtube.com/embed/YFXHfEqMcis" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Sons of Anarchy","thriller","assets/image/thumbnail/séries/SonsofAnarchy.jpg",'<iframe src="https://www.youtube.com/embed/NtyIzwKwWIU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Spartacus","adventure","assets/image/thumbnail/séries/Spartacus.jpg",'<iframe src="https://www.youtube.com/embed/eJiBouML3FQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Stranger Things","fantastic","assets/image/thumbnail/séries/StrangerThings.jpg",'<iframe src="https://www.youtube.com/embed/R1ZXOOLMJ8s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Suits","adventure","assets/image/thumbnail/séries/Suits.jpg",'<iframe src="https://www.youtube.com/embed/85z53bAebsI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("The Leftovers","fantastic","assets/image/thumbnail/séries/TheLeftovers.jpg",'<iframe src="https://www.youtube.com/embed/vAB4Ux62Dww" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("The Mentalist","polar","assets/image/thumbnail/séries/TheMentalist.jpg",'<iframe src="https://www.youtube.com/embed/YyAGm6tcdqk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("The Mist","fantastic","assets/image/thumbnail/séries/TheMist.jpg",'<iframe src="https://www.youtube.com/embed/INZJP8vUL_c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("The Walking Dead","fantastic","assets/image/thumbnail/séries/TheWalkingDead.jpg",'<iframe src="https://www.youtube.com/embed/zljB0ScC3Mw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
	new Serie("Weeds","comedy","assets/image/thumbnail/séries/Weeds.jpg",'<iframe src="https://www.youtube.com/embed/qZDIH2gbJMM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','3$'),
];


// Modal for each Movie when clicking the images.

$("img").click(function() {
	// $(".modalHotShoot").html("");
	for (i=0 ; i< libraryMovie.length ; i++) {
		if ($(this).attr("src") == libraryMovie[i].cover ) { 
			$(".hotShootTrailer").html(libraryMovie[i].trailer);
			$(".hotShootTitle").text(libraryMovie[i].title);
			$(".hotShootGender").text(libraryMovie[i].gender);
			$(".modalHotShoot").modal('show');
		}
// 			$("body").append(
// '<div class="modal modalHotShoot fade" id='+libraryMovie[i].id+'tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"><div class="modal-header"><div class="embed-responsive embed-responsive-16by9 modal-body">'
// +libraryMovie[i].trailer+'</div></div><div class="modal-body"><h1>'
// +libraryMovie[i].title+'</h1><br><p>'
// +libraryMovie[i].gender+'</p></div><div class="modal-footer"><p>Synopsis</p></div></div></div></div>'
// 				);
// 		}
// // 		$(".modalHotShoot").modal('show');
// // 		$(".modalHotShoot").modal({
// // 			backdrop: false,
// 		});
	}

});


//FILTERS by gender 

// --> MOVIES

$(".js-scifi").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="scifi") {
			$("#movieWrapper").append(
				"<div class=movieBox><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
	}
	$("#moreMoviesButton").hide();
	$("#movieWrapperAll").hide();
});

$(".js-drama").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="drama") {
			$("#movieWrapper").append(
				"<div class=movieBox><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
	}
	$("#moreMoviesButton").hide();
	$("#movieWrapperAll").hide();
});

$(".js-comedy").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="comedy") {
			$("#movieWrapper").append(
				"<div class='movieBox test'><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
	}
	$("#moreMoviesButton").hide();
	$("#movieWrapperAll").hide();
});

$(".js-fantastic").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="fantastic") {
			$("#movieWrapper").append(
				"<div class=movieBox><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
	}
	$("#moreMoviesButton").hide();
	$("#movieWrapperAll").hide();
});

$(".js-thriller").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="thriller") {
			$("#movieWrapper").append(
				"<div class='movieBox'><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
	}
	$("#moreMoviesButton").hide();
	$("#movieWrapperAll").hide();
});

$(".js-all").click( function() {
	$("#movieWrapper").html(" ");
	for(i=0 ; i<12 ; i++) {
			$("#movieWrapper").append(
				"<div class='movieBox'><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
	}
	$("#moreMoviesButton").show();
});

//--> Series

$(".js-adventure-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="adventure") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-comedy-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="comedy") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-fantastic-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="fantastic") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-thriller-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="thriller") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-scifi-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="scifi") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-polar-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<librarySerie.length ; i++) {
		if (librarySerie[i].gender==="polar") {
			$("#serieWrapper").append(
				"<div class=movieBox><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
	}
	$("#moreSeriesButton").hide();
	$("#serieWrapperAll").hide();
});

$(".js-all-serie").click( function() {
	$("#serieWrapper").html(" ");
	for(i=0 ; i<12 ; i++) {
			$("#serieWrapper").append(
				"<div class='movieBox'><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
	}
	$("#moreSeriesButton").show();
});


//ALL movies appear

$("#movieWrapper").html(function (){
	for(i=0 ; i<12; i++) {
			$("#movieWrapper").append(
				"<div class='movieBox'><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
});

$("#movieWrapperAll").html(function (){
	for(i=12 ; i< libraryMovie.length ; i++) {
			$("#movieWrapperAll").append(
				"<div class='movieBox'><img src="+libraryMovie[i].cover+"><p>"+libraryMovie[i].title+"</p><p>"+libraryMovie[i].gender+" "+libraryMovie[i].year+"</p></div>"
				);
		}
});
$("#movieWrapperAll").hide();

// ALL series appear

$("#serieWrapper").html(function (){
	for(i=0 ; i<12; i++) {
			$("#serieWrapper").append(
				"<div class='movieBox'><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
});

$("#serieWrapperAll").html(function (){
	for(i=12 ; i< librarySerie.length ; i++) {
			$("#serieWrapperAll").append(
				"<div class='movieBox'><img src="+librarySerie[i].cover+"><p>"+librarySerie[i].title+"</p><p>"+librarySerie[i].gender+"</p></div>"
				);
		}
});
$("#serieWrapperAll").hide();


//TOGGLE movie section

$("#moreMoviesButton").click(function() {
	if ($("#moreMoviesButton")[0].innerHTML ==="LESS MOVIES") {
		$("#movieWrapperAll").hide();
		$("#moreMoviesButton").text("MORE MOVIES");
	}
	else {
	$("#moreMoviesButton").text("LESS MOVIES");
	$("#movieWrapperAll").show();
}
	});

//TOGGLE for series

$("#moreSeriesButton").click(function() {
	if ($("#moreSeriesButton")[0].innerHTML ==="LESS SERIES") {
		$("#serieWrapperAll").hide();
		$("#moreSeriesButton").text("MORE SERIES");
	}
	else {
	$("#moreSeriesButton").text("LESS SERIES");
	$("#serieWrapperAll").show();
}
	});


//Footer random generation pictures

$("#movieWrapperFooter").html(function(){
	for(i=0 ; i < 6 ; i++) {
		var j= Math.floor(Math.random()*libraryMovie.length);
		$("#movieWrapperFooter").append("<div class='movieBoxFooter'><img src="+libraryMovie[j].cover+"></div>")
	}
});



//Shop movie generation pictures

$(".movieShopLeft").html(function(){
	for(i=0 ; i < 8 ; i++) {
		var k= Math.floor(Math.random()*libraryMovie.length);
		$(".movieShopLeft").append("<div class='movieBoxShop'><img class='shopMovie' src="+libraryMovie[k].cover+"><p>"+libraryMovie[k].title+"</p><p>"+libraryMovie[k].gender+" "+libraryMovie[k].year+"<span> "+libraryMovie[k].price+"</span></p></div>")
	};
	$(".movieShopRight").append("<div class='trailerBox'>"+libraryMovie[k].trailer+"</div><div class='trailerDescription'><span>"
					+libraryMovie[k].title+"</span><span>Gender:</span><p>"+libraryMovie[k].gender+"</p><span>Released:</span><p>"+libraryMovie[k].year+"</p><span>Price:</span><span> "+libraryMovie[i].price+"</span>")
});

 
//Shop clic image generation trailer.

$(".shopMovie").click(function(){
	for (i=0 ; i < libraryMovie.length ; i++) {
			if ($(this).attr("src") == libraryMovie[i].cover ) {
				$(".movieShopRight").html(" ");
				$(".movieShopRight").append("<div class='trailerBox'>"+libraryMovie[i].trailer+"</div><div class='trailerDescription'><span>"
					+libraryMovie[i].title+"</span><span>Gender:</span><p>"+libraryMovie[i].gender+"</p><span>Released:</span><p>"+libraryMovie[i].year+"</p><span>Price:</span><span> "+libraryMovie[i].price+"</span></div>");
		}
	}
});
