//====================== BEN REBOOT ALIEN ======================

const arrBenRebootAliens = [
    
    {nomePtbr: 'Quatro Braços', nomeIngles: "Four Arms", seasonName: 'primeBenRbFourArms', wikiUrl: 'https://ben10.fandom.com/wiki/Four_Arms_(Reboot)', imgRb: ['./assets/img/aliens/ben-reboot/4-bracos-(reboot)-1.png']},

    {nomePtbr: 'Arraia Jato', nomeIngles: "Jetray", seasonName: 'primeBenRbJetray', wikiUrl: 'https://ben10.fandom.com/wiki/Jetray_(Reboot)', imgRb: ['./assets/img/aliens/ben-reboot/arraia-jato-(reboot)-1.png', './assets/img/aliens/ben-reboot/arraia-jato-(reboot)-2.png', './assets/img/aliens/ben-reboot/arraia-jato-(reboot)-3.jpg']},

    {nomePtbr: 'Bala de Canhão', nomeIngles: "Cannonbolt", seasonName: 'primeBenRbCannonBolt', wikiUrl: 'https://ben10.fandom.com/wiki/Cannonbolt_(Reboot)', imgRb: ['./assets/img/aliens/ben-reboot/bala-de-canhao-(reboot)-1.png', './assets/img/aliens/ben-reboot/bala-de-canhao-(reboot)-2.png', './assets/img/aliens/ben-reboot/bala-de-canhao-(reboot)-3.png', './assets/img/aliens/ben-reboot/bala-de-canhao-(reboot)-4.png']},
    
    {nomePtbr: 'Chama', nomeIngles: "Heatblast", seasonName: 'primeBenRbHeatBlast', wikiUrl: 'https://ben10.fandom.com/wiki/Heatblast_(Reboot)', imgRb: ['./assets/img/aliens/ben-reboot/chama-(reboot)-1.png', './assets/img/aliens/ben-reboot/chama-(reboot)-2.png', './assets/img/aliens/ben-reboot/chama-(reboot)-3.png', './assets/img/aliens/ben-reboot/chama-(reboot)-4.png']},

    // {nomePtbr: '', nomeIngles: "", seasonName: 'primeBenRb', wikiUrl: '', imgRb: ['./assets/img/aliens/ben-reboot/']},
]

function rebootTab() {

    document.getElementById('rb-cards').innerHTML = ' '
    document.getElementById('rb-tunado-cards').innerHTML = ' '
    document.getElementById('rb-kix-cards').innerHTML = ' '
    document.getElementById('rb-nauta-cards').innerHTML = ' '
    console.log("rb apaga")

    document.getElementById('nav-tab-content-os').style.display = 'none'
    document.getElementById('nav-tab-content-af').style.display = 'none'
    document.getElementById('nav-tab-content-ua').style.display = 'none'
    document.getElementById('nav-tab-content-ov').style.display = 'none'
    document.getElementById('nav-tab-content-rb').style.display = 'inherit'

    let benRebootAliens = () => {

        for(let i = 0; i < arrBenRebootAliens.length; i++){
           
            var rbAliens = document.getElementById("rb-cards").innerHTML += `
                <li class="alien-card ${arrBenRebootAliens[i].seasonName}">
                        
                    <div class="alien-card-img">
                        <img src="${arrBenRebootAliens[i].imgRb[0]}" alt="${arrBenRebootAliens[i].nomePtbr}" data-toggle="modal" data-target="#${arrBenRebootAliens[i].seasonName}Modal">
                    </div>

                    <div class="alien-card-description">
                        <a href="${arrBenRebootAliens[i].wikiUrl}" target="_blank">
                            <p>${arrBenRebootAliens[i].nomePtbr}</p>
                        </a>
                    </div>
                            
                </li>
            `
        }

        console.log('reboot testando')
        return rbAliens
    }

    let tabContentRb = document.getElementById('nav-tab-content-rb').innerHTML = `

        <div id="sinopse">

            <h1>SINOPSE</h1>
            <p> 
                Com base na franquia de grande sucesso sobre o herói infantil Ben Tennyson, Ben 10 apresenta um Ben re-imaginado, sua prima Gwen e o vovô Max, enquanto viajam pelo país durante as férias de verão. Quando Ben encontra o Omnitrix, um relógio misterioso que o transforma em 10 alienígenas diferentes, um mundo de superpoderes extraterrestres se abre para ele.
            </p>

        </div>

        <div id="indice-list">

            <p>Índice</p>

            <li><a href="#reboot-aliens-tunado">Omnitunado</a></li>
            <li><a href="#reboot-aliens-kix">Omnikix</a></li>
            <li><a href="#reboot-aliens-nauta">Omninauta</a></li>

        </div>

        <ul id="rb-cards" class="aliens-cards">
            ${benRebootAliens()}
        </ul>

        <div class="alienDivisor" style="max-width: 1140px; width: 100%;">
            <h4 id="reboot-aliens-tunado">Omnitunado</h4>
            <hr>
        </div>

        <ul id="rb-tunado-cards" class="aliens-cards">
            
        </ul>
        
        <div class="alienDivisor" style="max-width: 1140px; width: 100%;">
            <h4 id="reboot-aliens-kix">Omnikix</h4>
            <hr>
        </div>

        <ul id="rb-kix-cards" class="aliens-cards">
            
        </ul>

        <div class="alienDivisor" style="max-width: 1140px; width: 100%;">
            <h4 id="reboot-aliens-nauta">Omninauta</h4>
            <hr>
        </div>

        <ul id="rb-nauta-cards" class="aliens-cards">
            
        </ul>

    `
    console.log('rb teste')
    return tabContentRb
}