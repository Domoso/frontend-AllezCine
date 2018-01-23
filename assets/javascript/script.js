function Movie(title, gender, cover, year) {
	this.title = title;
	this.gender = gender;
	this.cover = cover;
	this.year = year;
};

const libraryMovie = [
	new Movie("Lego Batman", "comedy", "assets/image/thumbnail/batmanmovie-2017-comedie.jpg" , 2017),
	new Movie("Hostel","thriller","assets/image/thumbnail/hostel-2005-thriller.jpg", 2005),
	new Movie("Inception","thriller","assets/image/thumbnail/inception-2010-scifi.jpg",2010),
	new Movie("Intouchables","comedy","assets/image/thumbnail/intouchables-2011-comedie.jpg",2011),
	new Movie("Le Patient Anglais","drama","assets/image/thumbnail/lepatientanglais-1996-dramatique.jpg",1996),
	new Movie("The Two Towers","fantastic","assets/image/lesdeuxtours-2002-aventure.jpg/",2002),
	new Movie("Seven","thriller", "assets/image/thumbnail/seven-1995-thriller.jpg" ,1995),
	new Movie("Shutter Island","thriller","assets/image/thumbnail/shutterisland-2010-thriller.jpg", 2010),
	new Movie("Star Wars II: The Empire Strikes Back", "scifi","assets/image/thumbnail/starwarsempire-1980-scifi.jpg",1980),
	new Movie("Survive Style 5","comedy","assets/image/thumbnail/survivestyle5.jpg",2004),
	new Movie("Swiss Army Man","comedy", "assets/image/thumbnail/swissarmyman-2016-comedie.jpg" ,2016),
	new Movie("The Fall","drama","assets/image/thumbnail/thefall-2006-dramatique.jpg",2006),
	new Movie("What We Do In The Shadows","comedy","assets/image/thumbnail/WhatWeDoInTheShadows-2014-comedie.jpg",2014),
	new Movie("Zoolander","comedy","assets/image/thumbnail/zoolander-2001-comedie.jpg",2001)
];


//Filters by gender of each Movie

$(".js-scifi").click( function() {
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="scifi") {
			console.log(libraryMovie[i]);
		}
	}
});

$(".js-drama").click( function() {
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="drama") {
			console.log(libraryMovie[i]);
		}
	}
});

$(".js-comedy").click( function() {
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="comedy") {
			console.log(libraryMovie[i]);
		}
	}
});

$(".js-fantastic").click( function() {
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="fantastic") {
			console.log(libraryMovie[i]);
		}
	}
});

$(".js-thriller").click( function() {
	for(i=0 ; i<libraryMovie.length ; i++) {
		if (libraryMovie[i].gender==="thriller") {
			console.log(libraryMovie[i]);
		}
	}
});
