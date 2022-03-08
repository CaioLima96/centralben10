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



// =========================================



//Ben 10 Classic
document.getElementById('nav-tab-content-os').addEventListener('click', (event) => {

	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0

	function alienFilter(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	let benPrimeOsFilter = arrBenPrimeClassicAliens.filter(alienFilter)

	benPrimeOsFilter.forEach((alien) => {
		console.log(alien, 'os')

		let modalContentListBenPrimeOs = () => {

			for(let i = 0; i < alien.imgOs.length; i++) {

				var modalListBenPrimeOs = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOs[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeOs
		}

		let modalBenPrimeOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul class="modal-card-list">
				${modalContentListBenPrimeOs()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOs
	})

}) 


//Ben 10 Alien Force
document.getElementById('nav-tab-content-af').addEventListener('click', (event) => {
	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')
	console.log(pegaSeasonName)

	let key = 0

	// let arr = () => {
	// 	for (let i = 0; i < arrBenPrimeAfAliens.length; i++ ) {
	// 		var arrValue =  arrBenPrimeAfAliens[i].seasonName
	// 	}
	// 	console.log(arrValue)
	// 	return arrValue
	// }

	function arrAfFilter(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function arrAfOsFilter(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}
	
	let afFilter = arrBenPrimeAfAliens.filter(arrAfFilter)
	console.log(afFilter, 'afFILTER')
	let afOsFilter = arrBenPrimeAfClassicAliens.filter(arrAfOsFilter)
	console.log(afOsFilter, 'afOSFILTER')

	
	if(afFilter) {
	
		afFilter.forEach((alien) => {
			console.log(alien, 'af')
	
			let modalContentListBenPrimeAf = () => {
	
				for(let i = 0; i < alien.imgAf.length; i++) {
	
					var modalListBenPrimeAf = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`
	
						<li class="modal-card" id="${alien.seasonName}${key += 1}">
							
							<img src="${alien.imgAf[i]}" alt="${alien.seasonName}">
							
						</li>
	
					`
				}
	
				return modalListBenPrimeAf
			}
	
			let modalBenPrimeAf = document.getElementsByClassName('modal-body')[0].innerHTML = `
	
				<div class="modal-header">
					<span class="close">&times;</span>
					<h2>${alien.nomePtbr}</h2>
				</div>
	
				<ul id="${alien.seasonName}Modal" class="modal-card-list">
					${modalContentListBenPrimeAf()}
				</ul>
	
				<div class="modal-alt-forms">
	
					<div></div>                    
	
				</div>
			
			`
	
			return modalBenPrimeAf
		})

		afOsFilter.forEach((alien) => {
			console.log(alien, 'af os')

			let modalContentListBenPrimeAfOs = () => {
	
				for(let i = 0; i < alien.imgAfClassic.length; i++) {
	
					var modalListBenPrimeAfOs = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`
	
						<li class="modal-card" id="${alien.seasonName}${key += 1}">
							
							<img src="${alien.imgAfClassic[i]}" alt="${alien.seasonName}">
							
						</li>
	
					`
				}
	
				return modalListBenPrimeAfOs
			}
	
			let modalBenPrimeAfOs = document.getElementsByClassName('modal-body')[0].innerHTML = `
	
				<div class="modal-header">
					<span class="close">&times;</span>
					<h2>${alien.nomePtbr}</h2>
				</div>
	
				<ul id="${alien.seasonName}Modal" class="modal-card-list">
					${modalContentListBenPrimeAfOs()}
				</ul>
	
				<div class="modal-alt-forms">
	
					<div></div>                    
	
				</div>
			
			`
	
			return modalBenPrimeAfOs
		})
	}
	// } else if(afOsFilter) {
	else {
		console.log('nao foi')
	}

})




// function btnclick(obj) {
// 	modal.style.display = "block";
// 	console.log(obj)
// }