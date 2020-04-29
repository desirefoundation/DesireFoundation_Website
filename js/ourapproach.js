var slides = null;
let i = null;
function task() {
  $(slides[i]).addClass("addBackground");
  if (i < slides.length - 1) {
	$(slides[i]).find(".nav_content").css({"visibility": "hidden", "opacity": "0"});

	$(slides[i + 1])
	  .find(".nav_content")
	  .css({"visibility": "visible", "opacity": "1"});
  }

  if (i === slides.length - 1) {
	slides.each(function (index, element) {
	  $(element).removeClass("addBackground");
	});
	$(slides[slides.length - 1])
	  .find(".nav_content")
	  .hide();
	i = 0;
	$(slides[0]).addClass("addBackground");
	if (i < slides.length - 1) {
	  $(slides[i]).find(".nav_content").css({"visibility": "hidden", "opacity": "0"});

	  $(slides[i + 1])
		.find(".nav_content")
		.css({"visibility": "visible", "opacity": "1"});
	}
	i++;
  } else {
	i++;
  }
}

$(document).ready(function() {
	slides = $("#nav_slide>div");
	i = 0;
	setInterval(task, 5000);
});





function FindLargest(array) {
//write your code here
//Start from here

let output = [];
for (let i = 0; i < array.length; i++) {
	for (let j = i + 1; j < array.length; j++) {
		let hightestNumberFlag = false;
		if (array[i] < array[j] && !hightestNumberFlag) {
			let obj = {};
			obj[array[i]] = array[j]
			output.push(obj);
			hightestNumberFlag = true;
			break
		} else if ( j === array.length - 1 && !hightestNumberFlag) {
			let obj = {};
			obj[array[i]] = -1
			output.push(obj);
			hightestNumberFlag = true;
		}
	}
	if (i === array.length - 1) {
		let obj = {};
			obj[array[i]] = -1
			output.push(obj);
	}
}
return output
}