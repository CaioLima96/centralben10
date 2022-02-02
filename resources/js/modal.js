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
	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	function alienFilter(value) {
		if(value.seasonName === pegaSeasonName){
			console.log(value)
			return value
		}
	}

	let teste1 = arrBenPrimeClassicAliens.filter(alienFilter)

	teste1.forEach((obj) => {
		console.log(obj)

		let modalContentList = () => {

			for(let i = 0; i < obj.imgOs.length; i++) {

				var modalList = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card">
						<div>
							<img src="${obj.imgOs[i]}" alt="${obj.seasonName}">
						</div>
					</li>

				`
			} 
			// console.log(modalList)
			return modalList
		}

		let modal = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close">&times;</span>
                <h2>${obj.nomePtbr}</h2>
            </div>

			<ul class="modal-card-list">
				${modalContentList()}
			</ul>
		
		`

		return modal
	})

}) 

// function btnclick(obj) {
// 	modal.style.display = "block";
// 	console.log(obj)
// }