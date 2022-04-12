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

// span.addEventListener('click', (event) => {
// 	modal.style.display = "none";
// })

function closeModal () {
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
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
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
	else {
		console.log('nao foi')
	}

})


//Ben 10 Ultimate Alien
document.getElementById('nav-tab-content-ua').addEventListener('click', (event) => {


	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	document.getElementsByClassName('modal-alt-forms')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')
	console.log(pegaSeasonName)

	//Iteração para não precisar usar ID repetido nos itens da lista de aliens
	let key = 0

	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBenPrimeUa(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenPrimeUaUlti(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenPrimeUaOs(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}
	

	//Aplica o filtro e armazena o alien retornado
	let filteredBenPrimeUa = arrBenPrimeUaAliens.filter(alienFilterBenPrimeUa)
	console.log(filteredBenPrimeUa, 'ua filter')

	let filteredBenPrimeUaUlti = arrBenPrimeUaUltimateAliens.filter(alienFilterBenPrimeUaUlti)
	console.log(filteredBenPrimeUaUlti, 'ua ulti filter')

	let filteredBenPrimeUaOs = arrBenPrimeUaClassicAliens.filter(alienFilterBenPrimeUaOs)
	console.log(filteredBenPrimeUaOs, 'ua os filter')
	

	//Joga na tela o valor filtrado
	filteredBenPrimeUa.forEach((alien) => {
		console.log(alien, 'ua')

		let modalContentListBenPrimeUa = () => {

			for(let i = 0; i < alien.imgUa.length; i++) {

				var modalListBenPrimeUa = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUa[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeUa
		}

		let modalBenPrimeUa = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeUa()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeUa
	})

	filteredBenPrimeUaUlti.forEach((alien) => {
		console.log(alien, 'ua ulti')

		let modalContentListBenPrimeUaUlti = () => {

			for(let i = 0; i < alien.imgUaUlti.length; i++) {

				var modalListBenPrimeUaUlti = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUaUlti[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeUaUlti
		}

		let modalBenPrimeUaUlti = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeUaUlti()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modalBenPrimeUaUlti
	})

	filteredBenPrimeUaOs.forEach((alien) => {
		console.log(alien, 'ua os')

		let modalContentListBenPrimeUaOs = () => {

			for(let i = 0; i < alien.imgUaClassic.length; i++) {

				var modalListBenPrimeUaOs = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUaClassic[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeUaOs
		}

		let modalContentListAltFormsBenPrimeUaOs = () => {

			for(let i = 0; i < alien.episodes.epiImg; i++) {
				
				var modalListBenPrimeUsOsHU = document.getElementsByClassName('modal-alt-forms')[0].innerHTML += `

					<li> 

						<p>${alien.episodes.epiName}</p>

						${imgHU(alien.episodes.epiImg[i])}
					
					</li>

				`
				var teste = alien.episodes[i].epiName
			}
			console.log(teste)

			return modalListBenPrimeUsOsHU
		}

		let modalBenPrimeUaOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeUaOs()}
			</ul>

			<div class="modal-alt-forms">

				<div class="modal-alt-content">

					<nav>
						<div><p>${alien.episodes[0].epiName}</p></div>
					</nav>
					
					<ul class="modal-alt-forms-list">

						<!--<li class="modal-alt-forms-card" >
							<img src="${alien.episodes[0].epiImg[0]}" />
						</li>
						<li class="modal-alt-forms-card" >
							<img src="${alien.episodes[0].epiImg[1]}" />
						</li>-->

						${modalContentListAltFormsBenPrimeUaOs()}
					</ul>  
				
				</div>                  

			</div>
		
		`

		return modalBenPrimeUaOs
	})
	
})


//Ben 10 Omniverse
document.getElementById('nav-tab-content-ov').addEventListener('click', (event) => {


	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '

	let pegaSeasonName = event.target.getAttribute('data-season')
	console.log(pegaSeasonName)


	//Iteração para não precisar usar ID repetido nos itens da lista de aliens
	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBenPrimeOv(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenPrimeOvOs(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenPrimeOvAf(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenPrimeOvUa(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	//Aplica o filtro e armazena o alien retornado
	let filteredBenPrimeOv = arrBenPrimeOvAliens.filter(alienFilterBenPrimeOv)
	console.log(filteredBenPrimeOv, 'ov filter')

	let filteredBenPrimeOvOs = arrBenPrimeOvClassicAliens.filter(alienFilterBenPrimeOvOs)
	console.log(filteredBenPrimeOvOs, 'ov os filter')

	let filteredBenPrimeOvAf = arrBenPrimeOvAfAliens.filter(alienFilterBenPrimeOvAf)
	console.log(filteredBenPrimeOvAf, 'ov af filter')

	let filteredBenPrimeOvUa = arrBenPrimeOvUaAliens.filter(alienFilterBenPrimeOvUa)
	console.log(filteredBenPrimeOvUa, 'ov ua filter')


	//Joga na tela o valor filtrado
	filteredBenPrimeOv.forEach((alien) => {
		console.log(alien, 'ov')

		let modalContentListBenPrimeOv = () => {

			for(let i = 0; i < alien.imgOv.length; i++) {

				var modalListBenPrimeOv = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOv[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeOv
		}

		let modalBenPrimeOv = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeOv()}
			</ul>
		
		`
		return modalBenPrimeOv
	})

	filteredBenPrimeOvOs.forEach((alien) => {
		console.log(alien, 'ov os')

		let modalContentListBenPrimeOvOs = () => {

			for(let i = 0; i < alien.imgOvClassic.length; i++) {

				var modalListBenPrimeOvOs = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvClassic[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeOvOs
		}

		let modalBenPrimeOvOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeOvOs()}
			</ul>
		
		`
		return modalBenPrimeOvOs
	})

	filteredBenPrimeOvAf.forEach((alien) => {
		console.log(alien, 'ov af')

		let modalContentListBenPrimeOvAf = () => {

			for(let i = 0; i < alien.imgOvAf.length; i++) {

				var modalListBenPrimeOvAf = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvAf[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeOvAf
		}

		let modalBenPrimeOvAf = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeOvAf()}
			</ul>
		
		`
		return modalBenPrimeOvAf
	})

	filteredBenPrimeOvUa.forEach((alien) => {
		console.log(alien, 'ov ua')

		let modalContentListBenPrimeOvUa = () => {

			for(let i = 0; i < alien.imgOvUa.length; i++) {

				var modalListBenPrimeOvUa = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvUa[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeOvUa
		}

		let modalBenPrimeOvUa = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>${alien.nomePtbr}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeOvUa()}
			</ul>
		
		`
		return modalBenPrimeOvUa
	})
})


//Ben 10 Reboot
document.getElementById('nav-tab-content-rb').addEventListener('click', (event) => {

	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBenRb(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenRbOt(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenRbOk(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBenRbOn(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}


	//Aplica o filtro e armazena o alien retornado
	let filteredBenRb = arrBenRebootAliens.filter(alienFilterBenRb)

	let filteredBenRbOt = arrBenRebootOmnitunadoAliens.filter(alienFilterBenRbOt)

	let filteredBenRbOk = arrBenRebootOmnikixAliens.filter(alienFilterBenRbOk)

	let filteredBenRbOn = arrBenRebootOmninautaAliens.filter(alienFilterBenRbOn)

	//Joga na tela o valor filtrado
	filteredBenRb.forEach((alien) => {
		console.log(alien, 'rb')

		let modalContentListBenRb = () => {

			for(let i = 0; i < alien.imgRb.length; i++) {

				var modalListBenRb = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRb[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenRb
		}

		let modalBenRb = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenRb()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRb
	})

	filteredBenRbOt.forEach((alien) => {
		console.log(alien, 'rb ot')

		let modalContentListBenRbOt = () => {

			for(let i = 0; i < alien.imgRbTunado.length; i++) {

				var modalListBenRbOt = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbTunado[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenRbOt
		}

		let modalBenRbOt = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenRbOt()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOt
	})

	filteredBenRbOk.forEach((alien) => {
		console.log(alien, 'rb ok')

		let modalContentListBenRbOk = () => {

			for(let i = 0; i < alien.imgRbKix.length; i++) {

				var modalListBenRbOk = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbKix[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenRbOk
		}

		let modalBenRbOk = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenRbOk()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOk
	})

	filteredBenRbOn.forEach((alien) => {
		console.log(alien, 'rb on')

		let modalContentListBenRbOn = () => {

			for(let i = 0; i < alien.imgRbNauta.length; i++) {

				var modalListBenRbOn = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbNauta[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenRbOn
		}

		let modalBenRbOn = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomePtbr}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenRbOn()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOn
	})

}) 
