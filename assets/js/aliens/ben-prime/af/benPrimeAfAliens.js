const arrBenPrimeAfAliens = [
    {nomePtbr: 'Alien X', nomeIngles: 'Alien X', imgAf: ['./assets/img/aliens/ben-prime/af/alien-x-(af)-1.png', './assets/img/aliens/ben-prime/af/alien-x-(af)-2.png']},

    {nomePtbr: 'Arraia Jato', nomeIngles: 'Jetray', imgAf: ['./assets/img/aliens/ben-prime/af/arraia-jato-(af)-1.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-2.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-3.png', './assets/img/aliens/ben-prime/af/arraia-jato-(af)-4.png']},

    {nomePtbr: 'Artrópode', nomeIngles: 'Brainstorm', imgAf: ['./assets/img/aliens/ben-prime/af/artropode-(af)-1.png', './assets/img/aliens/ben-prime/af/artropode-(af)-2.png', './assets/img/aliens/ben-prime/af/artropode-(af)-3.png', './assets/img/aliens/ben-prime/af/artropode-(af)-4.png']},

    {nomePtbr: 'Bebê Necrofriggiano', nomeIngles: "Big Chill's Offspring", imgAf: ['./assets/img/aliens/ben-prime/af/bebe-necrofrigiano-(af)-1.png']}


]

// function alienForceTab() {

//     let erase = document.getElementById('aliens-cards').innerHTML = ' '
//     let erase2 = document.getElementById('sinopse').innerHTML = ' '

//     let sinopse = document.getElementById('sinopse').innerHTML += `

//         <h1>SINOPSE</h1>

//         <p> 
//             Cinco anos após a série original, Ben reaparece sem o Omnitrix , até o desaparecimento de seu avô Max, tendo que colocá-lo de volta, reiniciando e dando a Ben um novo conjunto de 10 alienígenas. Junto de Gwen e seu antigo inimigo Kevin eles partem em missões encarando novos vilões e adquirindo novos alienígenas pelo tempo. A série fora originalmente intitulado Ben 10: Hero Generation (em tradução livre: Ben 10: Geração de Heróis).
//         </p>            
//     `
//     // let indice = document.getElementById('indice-list').innerHTML += `
//     //     <div id="indice-list">

//     //         <p>Índice</p>

//     //         <li><a href="#classic-aliens-af">Aliens do Clássico</a></li>

//     //     </div>
//     // `

//     for(let i = 0; i < arrBenPrimeAfAliens.length; i++){

//         var testando = document.getElementById('aliens-cards').innerHTML += `
//             <li class="alien-card" class="${arrBenPrimeAfAliens[i].nomeIngles}">
                    
//                     <div class="alien-card-img">
//                         <img src="${arrBenPrimeAfAliens[i].img[0]}" alt="${arrBenPrimeAfAliens[i].nomePtbr}" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//                     </div>

//                     <div class="alien-card-description">
//                         <a href="/" target="_blank">
//                             <p>${arrBenPrimeAfAliens[i].nomePtbr}</p>
//                         </a>
//                     </div>
                        
//             </li>
//         `

//         // var testando = document.getElementById('nav-tab-content').innerHTML += `

//         //     <div id="sinopse">

//         //         <h1 onclick="test()">SINOPSE</h1>
//         //         <p> 
//         //             Cinco anos após a série original, Ben reaparece sem o Omnitrix , até o desaparecimento de seu avô Max, tendo que colocá-lo de volta, reiniciando e dando a Ben um novo conjunto de 10 alienígenas. Junto de Gwen e seu antigo inimigo Kevin eles partem em missões encarando novos vilões e adquirindo novos alienígenas pelo tempo. A série fora originalmente intitulado Ben 10: Hero Generation (em tradução livre: Ben 10: Geração de Heróis).
//         //         </p>

//         //     </div>

//         //     <div id="indice-list">

//         //         <p>Índice</p>

//         //         <li><a href="#classic-aliens-af">Aliens do Clássico</a></li>

//         //     </div>

//         //     <!--PRIME BEN'S ALIEN CARDS-->
//         //     <ul id="aliens-cards">

//         //         <li class="alien-card" class="${arrBenPrimeAfAliens[i].nomeIngles}">
                        
//         //                 <div class="alien-card-img">
//         //                     <img src="${arrBenPrimeAfAliens[i].img[0]}" alt="${arrBenPrimeAfAliens[i].nomePtbr}" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//         //                 </div>

//         //                 <div class="alien-card-description">
//         //                     <a href="/" target="_blank">
//         //                         <p>${arrBenPrimeAfAliens[i].nomePtbr}</p>
//         //                     </a>
//         //                 </div>
                            
//         //         </li>

//         //     </ul>
//         // `
//     }

//     console.log('teste')

//     let teste = sinopse + testando

//     return teste
// }

function alienForceTab() {

    let erase = document.getElementById('aliens-cards').innerHTML = ' '
    let erase2 = document.getElementById('sinopse').innerHTML = ' '

    let benPrimeAfAliens = () => {
        for(let i = 0; i < arrBenPrimeAfAliens.length; i++){

            var testando = document.getElementById('aliens-cards').innerHTML += `
                <li class="alien-card" class="${arrBenPrimeAfAliens[i].nomeIngles}">
                        
                        <div class="alien-card-img">
                            <img src="${arrBenPrimeAfAliens[i].imgAf[0]}" alt="${arrBenPrimeAfAliens[i].nomePtbr}" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                        </div>

                        <div class="alien-card-description">
                            <a href="/" target="_blank">
                                <p>${arrBenPrimeAfAliens[i].nomePtbr}</p>
                            </a>
                        </div>
                            
                </li>
            `
        }
        return testando
    }

    let tabContent = document.getElementById('nav-tab-content').innerHTML = `
        
        <div id="sinopse">

            <h1>SINOPSE</h1>
            <p> 
                Cinco anos após a série original, Ben reaparece sem o Omnitrix , até o desaparecimento de seu avô Max, tendo que colocá-lo de volta, reiniciando e dando a Ben um novo conjunto de 10 alienígenas. Junto de Gwen e seu antigo inimigo Kevin eles partem em missões encarando novos vilões e adquirindo novos alienígenas pelo tempo. A série fora originalmente intitulado Ben 10: Hero Generation (em tradução livre: Ben 10: Geração de Heróis).
            </p>

        </div>

        <div id="indice-list">

            <p>Índice</p>

            <li><a href="#classic-aliens-af">Aliens do Clássico</a></li>

        </div>

        <ul id="aliens-cards">
            ${benPrimeAfAliens()}
            <h4 id="classic-aliens-af">Aliens do Clássico em Alien Force</h4>
            <hr class="alienDivisor">
        </ul>
    
    `
    console.log('teste')
    return tabContent
}