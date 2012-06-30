var nav = {
	map : function() {
		changeView("googleMap");
		mapController.renderMap();
	},
	showing : function() {
		showing.load(function(data) {
			console.log(data);
			var array = data.films.film;
			var tpl = '<a><img src="{0}" />{1}<br /><span>Director: {2}</span><br /><span>{3} {4}</span></a>'
			var html = ""
			for(var i = 0; i < array.length; i++) {
				var d = array[i];
				console.log(d);
				// single data instance
				var director=d.director;
				var image=d.poster;
				var runTime=d.runtime;
				var ageCert=d.cert;
				var title=d.title;

				html += "<li>";
				html += tpl.replace("{0}", image).replace("{1}", title).replace("{2}", director).replace("{3}", runTime).replace("{4}", ageCert);
				html += "</li>";

			}
			$("#showing-list").html(html);
      
			changeView("showing");

		});
	}
}