//Function Declarations

//Creates Single Item for Output from JSON File

function outputSingleItem(key, val){
	var output = '<li>';
	output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" class="min" />';
	output += '<h2>' + val.name + '</h2>';
	output += '<span class="bio"><h3> Biography <i class="fa fa-arrow-circle-o-right"></i></h3>'
	output += '<p class="hidden">' + val.bio + '</p></span>';
	output += '</li>';
	return output;

}

//Provides Animation for expandable bio area
function animateBio(){
	var bioExpandArea = $('.bio');
	var arrow = bioExpandArea.find('i');
	bioExpandArea.click(function(){
		$(this).find('p').slideToggle();
		$(this).find('i').addClass('spin');

		arrow.on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
        		$(this).removeClass("spin");
   		 });
	});

}

//MAIN
	$('#search').keyup(function(){
			var searchField = $('#search').val();
			console.log(searchField);
			var myExp = new RegExp(searchField, "i");
			$.getJSON('data.json', function(data){
					var output = '<ul class="search-results">'
						$.each(data, function(key, val){
							if ((val.name.search(myExp) != -1 || (val.bio.search(myExp) != -1))){
								output += outputSingleItem(key, val);
							}
						});
						output +='</ul>';
					$('#update').html(output);
			});

			setTimeout(function(){animateBio();}, 10);

	});

	$('#viewAll').click(function(){
			$.getJSON('data.json', function(data){
			var output = '<ul class="search-results">';
			$.each(data, function(key, val){
					output += outputSingleItem(key, val);
			});
			output +='</ul>';
			$('#update').html(output);
		});
		setTimeout(function(){animateBio();}, 1000);
	});
