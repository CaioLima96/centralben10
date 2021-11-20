const arrBenPrimeAfAliens = [
    {nomePtbr: 'Alien X', nomeIngles: 'Alien X', img: ['./assets/img/aliens/ben-prime/af/alien-x-(af)-1.png', './assets/img/aliens/ben-prime/af/alien-x-(af)-2.png']},

    {nomePtbr: 'Arraia Jato', nomeIngles: 'Jetray', img: ['./assets/img/aliens/ben-prime/af/arraia-jato-(af)-1.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-2.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-3.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-4.png']},

    {nomePtbr: 'Artrópode', nomeIngles: 'Brainstorm', img: ['./assets/img/aliens/ben-prime/af/artropode-(af)-1.png', './assets/img/aliens/ben-prime/af/artropode-(af)-2.png', './assets/img/aliens/ben-prime/af/artropode-(af)-3.png', './assets/img/aliens/ben-prime/af/artropode-(af)-4.png']},

    {nomePtbr: 'Bebê Necrofriggiano', nomeIngles: "Big Chill's Offspring", img: ['./assets/img/aliens/ben-prime/af/bebe-necrofrigiano-(af)-1.png']}
]

function alienForceTab() {
    // let testando = document.getElementById('aliens-cards').innerHtml = `<img src="${arrBenPrimeAfAliens[0].img[0]}" alt="${arrBenPrimeAfAliens[0].nomeIngles}" data-toggle="modal" data-target="#ClassicBenFourArmsModal">`

    // let testando = document.querySelector('.alien-card-description').innerHTML = `
    // <a href="/" target="_blank">
    //     <p>${arrBenPrimeAfAliens[0].nomePtbr}</p>
    // </a>
    // `
    let erase = document.getElementById('aliens-cards').innerHTML = ' '
    
    for(let i = 0; i < arrBenPrimeAfAliens.length; i++){

        var testando = document.getElementById('aliens-cards').innerHTML += `
        <li class="alien-card" class="${arrBenPrimeAfAliens[i].nomeIngles}">
                
                <div class="alien-card-img">
                    <img src="${arrBenPrimeAfAliens[i].img[0]}" alt="${arrBenPrimeAfAliens[i].nomePtbr}" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                </div>

                <div class="alien-card-description">
                    <a href="/" target="_blank">
                        <p>${arrBenPrimeAfAliens[i].nomePtbr}</p>
                    </a>
                </div>
                    
        </li>
    `
    }

    console.log('teste')

    return testando
}