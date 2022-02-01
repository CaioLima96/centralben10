// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

function btnclick() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



document.getElementById('nav-tab-content-os').addEventListener('click', (event) => {
	
	
	let pegaModal = event.target.getAttribute('data-season')
	console.log(event)
	console.log(pegaModal)
	// let valor = event.dataset.season

	//console.log(arrBenPrimeClassicAliens.seasonName.indexOf(pegaModal))

	function abc(value) {
		if(value.seasonName === pegaModal){
			console.log(value)
			return value
		}
	}

	let teste1 = arrBenPrimeClassicAliens.filter(abc)
	teste1.forEach((alien) => {
		console.log(alien)
	})

}) 

// function btnclick(obj) {
// 	modal.style.display = "block";
// 	console.log(obj)
// }