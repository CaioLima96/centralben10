function classicTab () {
    let classicTab = document.getElementById('nav-tab-content').innerHTML = `
        <div id="sinopse">

            <h1>SINOPSE</h1>
            <p>
                Aos 10 anos de idade, Benjamin Kirby Tennyson descobre um dispositivo alienígena na floresta chamado de Omnitrix, que lhe permite se transformar em 10 diferentes espécies alienígenas. Ao longo de suas férias de verão, viajando o país num trailer com seu
                avô Max e com a sua prima Gwen, Ben luta contra o crime e alienígenas do mal com seus novos poderes, adquirindo a capacidade de se transformar em mais nove novos alienígenas ao longo do caminho.
            </p>

        </div>

        <!--PRIME BEN'S ALIEN CARDS-->
        <ul class="aliens-cards">

            <li class="alien-card four-arms">
                
                <div class="alien-card-img">
                    <img src="./4-bracos-(classico)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                </div>

                <div class="alien-card-description">
                    <a href="/" target="_blank">
                        <p>4 Braços</p>
                    </a>
                </div>
                
            </li>

            <li class="alien-card four-arms">
                
                <div class="alien-card-img">
                    <img src="./4-bracos-(classico)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                </div>

                <div class="alien-card-description">
                    <a href="/" target="_blank">
                        <p>4 Braços</p>
                    </a>
                </div>
                
            </li>

            <li class="alien-card four-arms">
                
                <div class="alien-card-img">
                    <img src="./4-bracos-(classico)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                </div>

                <div class="alien-card-description">
                    <a href="/" target="_blank">
                        <p>4 Braços</p>
                    </a>
                </div>
                
            </li>

            <li class="alien-card four-arms">
                
                <div class="alien-card-img">
                    <img src="./4-bracos-(classico)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
                </div>

                <div class="alien-card-description">
                    <a href="/" target="_blank">
                        <p>4 Braços</p>
                    </a>
                </div>
                
            </li>

        </ul>
    `

    return classicTab
}

// function alienForceTab () {

//     let alienForceTab = document.getElementById('nav-tab-content').innerHTML = `
    // <div id="sinopse">

    //     <h1 onclick="test()">SINOPSE</h1>
    //     <p> 
    //         Cinco anos após a série original, Ben reaparece sem o Omnitrix , até o desaparecimento de seu avô Max, tendo que colocá-lo de volta, reiniciando e dando a Ben um novo conjunto de 10 alienígenas. Junto de Gwen e seu antigo inimigo Kevin eles partem em missões encarando novos vilões e adquirindo novos alienígenas pelo tempo. A série fora originalmente intitulado Ben 10: Hero Generation (em tradução livre: Ben 10: Geração de Heróis).
    //     </p>

    // </div>

    // <div id="indice-list">

    //     <p>Índice</p>

    //     <li><a href="#classic-aliens-af">Aliens do Clássico</a></li>

    // </div>

//     <!--PRIME BEN'S ALIEN CARDS-->
//     <ul class="aliens-cards">

//         <li class="alien-card" class="ripJaws">
            
//             <div class="alien-card-img">
//                 <img src="./aquatico-(classico)-7.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//             </div>

//             <div class="alien-card-description">
//                 <a href="/" target="_blank">
//                     <p>Aquatico</p>
//                 </a>
//             </div>
                
//         </li>

//         <li class="alien-card" class="ripJaws">
            
//             <div class="alien-card-img">
//                 <img src="./aquatico-(classico)-7.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//             </div>

//             <div class="alien-card-description">
//                 <a href="/" target="_blank">
//                     <p>Aquatico</p>
//                 </a>
//             </div>
                
//         </li>

//         <li class="alien-card" class="ripJaws">
            
//             <div class="alien-card-img">
//                 <img src="./aquatico-(classico)-7.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//             </div>

//             <div class="alien-card-description">
//                 <a href="/" target="_blank">
//                     <p>Aquatico</p>
//                 </a>
//             </div>
                
//         </li>

//         <li class="alien-card" class="ripJaws">
            
//             <div class="alien-card-img">
//                 <img src="./aquatico-(classico)-7.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
//             </div>

//             <div class="alien-card-description">
//                 <a href="/" target="_blank">
//                     <p>Aquatico</p>
//                 </a>
//             </div>
                
//         </li>

//     </ul>
    
    
//     `

//     return alienForceTab
// }

function ultimateAlienTab() {
    
    let ultimateAlienTab = document.getElementById('nav-tab-content').innerHTML = `
    <div id="sinopse">

        <h1>SINOPSE</h1>
        <p> 
            Algumas semanas após Ben 10: Força Alienígena, Ben possui um novo dispositivo: o Super Omnitrix (que permite virar <a href="#ultimate-aliens-ultimates">versões supremas</a> de seus aliens), além de ter que lidar com o fato da sua identidade secreta ter sido revelada. Os antigos vilões prometem retornar e novas ameaças ao universo surgem, mas Gwen e Kevin também voltam e estão prontos para dar o apoio que o herói precisa.
        </p>

    </div>

    <div id="indice-list">

        <p>Índice</p>

        <li><a href="#ultimate-aliens-ultimates">Aliens Supremos</a></li>
        <li><a href="#classic-aliens-ua">Aliens do Clássico</a></li>

    </div>

    <!--PRIME BEN'S ALIEN CARDS-->
    <ul class="aliens-cards">

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./macaco-aranha-supremo-(ua)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./macaco-aranha-supremo-(ua)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./macaco-aranha-supremo-(ua)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./macaco-aranha-supremo-(ua)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

    </ul>
    
    
    `

    return ultimateAlienTab
}

function omniverseTab() {

    let omniverseTab = document.getElementById('nav-tab-content').innerHTML = `
    <div id="sinopse">

        <h1>SINOPSE</h1>
        <p> 
            Ben recebe um novo Omnitrix, contendo as transformações da série <a href="#classic-aliens-ov">Clássica</a>,<a href="#alienForce-aliens-ov"> Força Alienígena</a>,<a href="#ultimate-aliens-ov"> Supremacia Alienígena</a>, além de novos aliens incríveis. Esta versão é a original, ele so havia recebido protótipos ao longo de sua jornada, e essa versão começou a ser produzida logo quando ganhou seu primeiro Omnitrix. No entanto, este Omnitrix ainda está em fase de testes e nem sempre fornece ao Ben a transformação no alien que ele pediu, transformando-o em outra coisa, o que cria situações engraçadas para o nosso herói.
        </p>

    </div>

    <div id="indice-list">

        <p>Índice</p>

        <li><a href="#classic-aliens-ov">Aliens do Clássico</a></li>
        <li><a href="#alienForce-aliens-ov">Aliens do Força Alienígena</a></li>
        <li><a href="#ultimate-aliens-ov">Aliens do Supremacia Alienígena</a></li>


    </div>

    <!--PRIME BEN'S ALIEN CARDS-->
    <ul class="aliens-cards">

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./astrodactilo-(omniverse)-2.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./astrodactilo-(omniverse)-2.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./astrodactilo-(omniverse)-2.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./astrodactilo-(omniverse)-2.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

    </ul>
    
    
    `

    return omniverseTab
}

function rebootTab() {

    let rebootTab = document.getElementById('nav-tab-content').innerHTML = `
    <div id="sinopse">

        <h1>SINOPSE</h1>
        <p> 
            Com base na franquia de grande sucesso sobre o herói infantil Ben Tennyson, Ben 10 apresenta um Ben re-imaginado, sua prima Gwen e o vovô Max, enquanto viajam pelo país durante as férias de verão. Quando Ben encontra o Omnitrix, um relógio misterioso que o transforma em 10 alienígenas diferentes, um mundo de superpoderes extraterrestres se abre para ele.
        </p>

    </div>

    <div id="indice-list">

        <p>Índice</p>

        <li><a href="#omnitunado">Omnitunado</a></li>
        <li><a href="#omnikix">Omnikix</a></li>
        <li><a href="#omninauta">Omninauta</a></li>


    </div>

    <!--PRIME BEN'S ALIEN CARDS-->
    <ul class="aliens-cards">

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./chama-omnitunado-(reboot)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./chama-omnitunado-(reboot)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./chama-omnitunado-(reboot)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

        <li class="alien-card" class="ripJaws">
            
            <div class="alien-card-img">
                <img src="./chama-omnitunado-(reboot)-1.png" alt="Retângulo 1" class="img-fluid" data-toggle="modal" data-target="#ClassicBenFourArmsModal">
            </div>

            <div class="alien-card-description">
                <a href="/" target="_blank">
                    <p>Aquatico</p>
                </a>
            </div>
                
        </li>

    </ul>
    
    
    `

    return rebootTab
}