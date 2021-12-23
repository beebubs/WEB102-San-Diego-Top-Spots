$(document).ready(function() {
// write your code here

$.getJSON("data.json", function(data){
	console.log(data); 
	
  $(data).each(function(i, topSpots){
	let googleMaps = ("https://www.google.com/maps/search/?api=1&query=" + topSpots.location[0] + "%2C" + topSpots.location[1])
  	$('#topSpotsBody').append($("<tr>")
        .append($("<td>").append(topSpots.name))
        .append($("<td>").append(topSpots.description))
		.append($("<td>").append(`<a href=${googleMaps}>Open In Google Maps</a>`))); 
		
  });
})

});
