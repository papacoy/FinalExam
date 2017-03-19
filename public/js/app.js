$('#super').html(`
	<div class="progress">
      <div class="indeterminate"></div> 
  </div>
`);
setTimeout(function(){
	y();
},1000);

function y(){
$.ajax({
	url: "http://www.omdbapi.com/?t=dragon+ball+super" 
}).done(function(res){
	console.log(res);
	let html = `
	 <style> h1 , h3 , h5{ color: yellow;  text-shadow: 2px 2px 5px red;
        
	    }
	    </style>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
	`;
	$('#super').html(html);
});
}


$('#gt').html(`
	<div class="progress">
      <div class="indeterminate"></div> 
  </div>
`);


setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=dragon+ball+GT" 
}).done(function(res){
	console.log(res);
	let html = `
	 <style> h1 , h3 , h5{ color: yellow;  text-shadow: 2px 2px 5px red;
        
	    }
	    </style>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
	`;
	$('#gt').html(html);
});
}


$('#z').html(`
	<div class="progress">
      <div class="indeterminate"></div>
  </div>
`);


setTimeout(function(){
	v();
},1000);

function v(){
$.ajax({
	url: "http://www.omdbapi.com/?t=dragon%20ball%20z" 
}).done(function(res){
	console.log(res);
	let html = `
	    <style> h1 , h3 , h5{ color: yellow;  text-shadow: 2px 2px 5px red;
        
	    }
	    </style>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Director: ${res.Director}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
	`;
	$('#z').html(html);


});
}


$('#kai').html(`
	<div class="progress">
      <div class="indeterminate"></div>
  </div>
`);


setTimeout(function(){
	a();
},1000);

function a(){
$.ajax({
	url: "http://www.omdbapi.com/?t=dragon+ball" 
}).done(function(res){
	console.log(res);
	let html = `
	 <style> h1 , h3 , h5{ color: yellow;  text-shadow: 2px 2px 5px red;
        
	    }
	    </style>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Director: ${res.Director}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
	`;
	$('#kai').html(html);


});
}

