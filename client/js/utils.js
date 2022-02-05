const colors = [
	"#002FA7",
	"#8a2be2",
	"#5f9ea0",
	"#E4717A",
	"#1e90ff",
	"#b22222",
	"#00FF00",
	"#ff69b4",
	"#ff4500",
	"#ff0000",
];

function getUsernameColor(username){

  var hash = username.charCodeAt(0);

	var color = "#6525a1";
	
	for (let i = 0; i < colors.length; i++) {
		if (hash % i === 0) {
			color = colors[i];
		}
	}

  return color;

}