//Library  creation

function Movie(title, gender, cover, year, trailer, price) {
	this.title = title;
	this.gender = gender;
	this.cover = cover;
	this.year = year;
	this.trailer = trailer;
	this.price = price;
};

const libraryMovie = [
	new Movie("Lego Batman", "comedy", "assets/image/thumbnail/batmanmovie-2017-comedie.jpg" , 2017,'<iframe src="https://www.youtube.com/embed/iMdQXYQ_MD8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Hostel","thriller","assets/image/thumbnail/hostel-2005-thriller.jpg", 2005,'<iframe src="https://www.youtube.com/embed/4d5_lrn9v-g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Inception","thriller","assets/image/thumbnail/inception-2010-scifi.jpg",2010,'<iframe src="https://www.youtube.com/embed/8hP9D6kZseM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Intouchables","comedy","assets/image/thumbnail/intouchables-2011-comedie.jpg",2011,'<iframe src="https://www.youtube.com/embed/cXu2MhWYUuE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Le Patient Anglais","drama","assets/image/thumbnail/lepatientanglais-1996-dramatique.jpg",1996,'<iframe src="https://www.youtube.com/embed/Xk_LRcOFT0c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("The Two Towers","fantastic","assets/image/thumbnail/lesdeuxtours-2002-aventure.jpg",2002,'<iframe src="https://www.youtube.com/embed/ve5HZfrrUqc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Seven","thriller", "assets/image/thumbnail/seven-1995-thriller.jpg" ,1995,'<iframe src="https://www.youtube.com/embed/vr3UZ-axauU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Shutter Island","thriller","assets/image/thumbnail/shutterisland-2010-thriller.jpg", 2010,'<iframe src="https://www.youtube.com/embed/lhBTlYQcBC0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Star Wars II: The Empire Strikes Back", "scifi","assets/image/thumbnail/starwarsempire-1980-scifi.jpg",1980,'<iframe src="https://www.youtube.com/embed/JNwNXF9Y6kY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Survive Style 5","comedy","assets/image/thumbnail/Survivestyle5-2004-comedie.jpg",2004,'<iframe src="https://www.youtube.com/embed/LEH7nDkiPEk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Swiss Army Man","comedy", "assets/image/thumbnail/swissarmyman-2016-comedie.jpg" ,2016,'<iframe src="https://www.youtube.com/embed/yrK1f4TsQfM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("The Fall","drama","assets/image/thumbnail/thefall-2006-dramatique.jpg",2006,'<iframe src="https://www.youtube.com/embed/dyFrBC1rAcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("What We Do In The Shadows","comedy","assets/image/thumbnail/WhatWeDoInTheShadows-2014-comedie.jpg",2014,'<iframe src="https://www.youtube.com/embed/IAZEWtyhpes" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$"),
	new Movie("Zoolander","comedy","assets/image/thumbnail/zoolander-2001-comedie.jpg",2001,'<iframe src="https://www.youtube.com/embed/YtQq0T3ExLs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',"5$")
];


//Filters by gender of each Movie
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


//All movies appear
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

//toggle movie section
$("#moreMoviesButton").click(function() {
	if ($("#moreMoviesButton")[0].innerHTML ==="LESS MOVIES") {
		console.log($("#moreMoviesButton").innerHTML)
		$("#movieWrapperAll").hide();
		$("#moreMoviesButton").text("MORE MOVIES");
	}
	else {
	$("#moreMoviesButton").text("LESS MOVIES");
	$("#movieWrapperAll").show();
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
	}
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



