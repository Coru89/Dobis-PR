$(document).ready(function(){

console.log('are we here?');

	$.ajax({
		url: "/data/leaders.json",
		// data: $(this).serialize(),
		type: "GET",
		dataType: "json",
		success: function (data, status, xhr) {
			// console.log("data:")
			// console.log("status:")
			console.log(status);
			// console.log("xhr:");
			// console.log(xhr);

			for (i = 0; i < data.people.length; i++) {
				// console.log(data.people[i].Name);
				document.getElementById('ldrName-' + i).innerHTML = data.people[i].Name;
				document.getElementById('ldrBio-' + i).innerHTML = data.people[i].Bio;
				document.getElementById('ldrTitle-' + i).innerHTML = data.people[i].Title;
			}
		},
		error: function(data, status, xhr){
			console.log(data);
			console.log(status);
			// console.log(xhr);
		}
	})

	$.ajax({
		url: "https://randomuser.me/api/?nat=ch&results=10",
		// data: $(this).serialize(),
		type: "GET",
		dataType: "json",
		success: function (data, status, xhr) {
			// console.log("data:")
			// console.log("status:")
			console.log(data);
			console.log(data.results.length);
			for (i = 0; i < data.results.length; i++) {
				// console.log(data.people[i].Name);
				document.getElementById('name-' + i).innerHTML = data.results[i].name.first + " " + data.results[i].name.last;
				console.log(data.results[i].picture.medium);
				document.querySelector('.card-img-employee-' + i).setAttribute("src", data.results[i].picture.large);
				// document.getElementById('title-' + i).innerHTML = data.people[i].Title;
			}
		},
		error: function(data, status, xhr){
			console.log(data);
			console.log(status);
			// console.log(xhr);
		}
	})


})
