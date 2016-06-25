document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
}

function getFileSystem(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs){
		var dataDir = fs.root.getDirectory("Carpeta", { create: true });
		var directoryReader = fs.root.createReader();

		directoryReader.readEntries(function(entries){
			var i;
			files = "<ul><li class='folder'>" + fs.root.fullPath + "</li>";

			for(i = 0; i < entries.length; i++){
				files += "<li class='folder'>" + entries[i].name + "</li>";
			}

			files += "</ul>";
			document.getElementById('folderName').innerHTML = files;
		}, function(error){
			alert(error.code);
		})
	}, function(error){
		alert(error.code);
	});
}