$(document).ready(function(){

	var firstName;
	var lastName;

	$(window).scroll(function(){
		console.log("scrolling");
		function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
	})

	$.ajax({
		url: "data/leaders.json",
		// data: $(this).serialize(),
		type: "GET",
		dataType: "json",
		success: function (data, status, xhr) {
			console.log(status);

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
		url: "https://randomuser.me/api/?&results=4&gender=female",
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

				firstName = data.results[i].name.first.charAt(0).toUpperCase() + data.results[i].name.first.substring(1);
				lastName = data.results[i].name.last.substring(0,1).toUpperCase() + data.results[i].name.last.substring(1);

				document.getElementById('name-' + i).innerHTML = firstName + "<br>" + lastName;
				document.getElementById('fname-' + i).innerHTML = firstName;
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
