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

// function btnclick() {
// 	modal.style.display = "block";
// }

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

	modal.style.display = "block";
	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0

	function alienFilter(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	let teste1 = arrBenPrimeClassicAliens.filter(alienFilter)

	teste1.forEach((alien) => {
		console.log(alien)

		let modalContentListItens = () => {

			for(let i = 0; i < alien.imgOs.length; i++) {

				var modalList = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOs[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalList
		}

		let modal = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul class="modal-card-list">
				${modalContentListItens()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modal
	})

}) 

document.getElementById('nav-tab-content-af').addEventListener('click', (event) => {

	modal.style.display = "block";
	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')
	console.log(pegaSeasonName)

	let key = 0

	function alienFilter(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	let teste2 = arrBenPrimeAfAliens.filter(alienFilter)

	teste2.forEach((alien) => {
		console.log(alien)

		let modalContentListItens = () => {

			for(let i = 0; i < alien.imgAf.length; i++) {

				var modalList = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgAf[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalList
		}

		let modal = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul class="modal-card-list">
				${modalContentListItens()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modal
	})

}) 

// function btnclick(obj) {
// 	modal.style.display = "block";
// 	console.log(obj)
// }