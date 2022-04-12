function ad2021tab() {
    
    console.log('tab2021 teste1')
    let tab2021 = document.getElementById("challengeTab").innerHTML = `

        <div id="ad2021tab">

            <!--CHALLENGE-MENU-->
            <div id="nav-tab-menu-2021" class="nav-tab-menu">

                <nav>
                    <ul>
                        <li onclick="alienDraw2021JanTab()">JAN</li>
                        <li onclick="alienDraw2021FevTab()">FEV</li>
                        <li onclick="alienDraw2021MarTab()">MAR</li>
                        <li onclick="alienDraw2021AbrTab()">ABR</li>
                        <li onclick="alienDraw2021MaiTab()">MAI</li>
                        <li onclick="alienDraw2021JunTab()">JUN</li>
                        <li onclick="alienDraw2021JulTab()">JUL</li>
                    </ul>
                </nav>

            </div>

            <!--NAV TAB CONTENT-->
            <div id="nav-tab-content" class="nav-tab-content-2021">

                ${alienDraw2021JanTab()}

            </div>

        </div>
    `
    console.log('tab2021 teste2')
    return tab2021
}

function alienDraw2021JanTab() {

    console.log('s')

    let ad2021Jantab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/780047149272855/" target="_blank">Animais Mutantes do Dr.Animal</a><br> Data: 28/01/2021 - 07/02/2021
            </p>
        </div>

        <ul class="grid-cards">

            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/01ª-edition-animais-mutantes-do-dr-animal/first-place-icaro-andrade.jpg" alt="Ícaro Andrade" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/icaro.andradesouzalourenco/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/icaro.andradesouzalourenco/" target="_blank">
                            <p>Ícaro Andrade</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                            
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/01ª-edition-animais-mutantes-do-dr-animal/second-place-joao-kailane-nunes.jpg" alt="kaeni_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/kaeni_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/kaeni_art/" target="_blank">
                            <p>kaeni_art</p>
                        </a>

                    </div>

                </div>
                 
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/01ª-edition-animais-mutantes-do-dr-animal/third-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                 
            </li>

        </ul>

    `

    console.log('janeiro 2021')
    return ad2021Jantab
}

function alienDraw2021FevTab(){

    let desafio1Fev2021 = `
        <!--DESAFIO 1-->
        <ul class="grid-cards">

            <li class="card firstPlace">
                                    
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/02ª-edition-folclore/first-place-_yukio_draws_.jpg" alt="_yukio_draws_">
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/_yukio_draws_/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/_yukio_draws_/" target="_blank">
                            <p>_yukio_draws_</p>
                        </a>

                    </div>

                </div>
            
            </li>

            <li class="card secondPlace">
                                    
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/02ª-edition-folclore/second-place-luigy_martins.jpg" alt="luigy_martins" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/_luigy._/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>

                            <a href="https://www.artstation.com/luigy_martins" target="_blank"><img src="../../../assets/img/icons/artstations-icon.png" alt="artstation icon"></a>
                        </div>

                        <a href="https://www.artstation.com/luigy_martins" target="_blank">
                            <p>Luigy Martins</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/02ª-edition-folclore/third-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let desafio2Fev2021 = `
        <ul class="grid-cards">
                                
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/03ª-edition-mitologias/first-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/03ª-edition-mitologias/second-place-kailane-nunes.jpg" alt="kaeni_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/kaeni_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/kaeni_art/" target="_blank">
                            <p>kaeni_art</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/03ª-edition-mitologias/third-place-taka-altair.jpg" alt="Taka Altair" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=1648857678640295&set=pcb.794689057808664" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=1648857678640295&set=pcb.794689057808664" target="_blank">
                            <p>Taka Altair</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let ad2021FevTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/787418341869069/" target="_blank">Folclore</a><br> Data: 10/02/2021 - 20/02/2021
            </p>
        </div>

        ${desafio1Fev2021}

        <!--DESAFIO 2-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/794689057808664/" target="_blank">Mitologias</a><br> Data: 24/02/2021 - 06/03/2021
            </p>
        </div>

        ${desafio2Fev2021}
        
    `
    console.log('fevereiro 2021')
    return ad2021FevTab
}

function alienDraw2021MarTab() {

    let ad2021MarTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--NAV TAB CONTENT-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/787418341869069/" target="_blank">Aliens baseados em super-heróis</a><br> Data: 18/03/2021 - 28/03/2021
            </p>
        </div>

        <ul class="grid-cards">
                            
                <li class="card firstPlace">
                    
                    <div class="card-img">
                        <img src="../../../assets/img/challenges/aliendraw/2021/4º-edition-aliens-baseados-em-super-herois/first-place-eric-gomes-da-rosa.jpg" alt="Éric Gomes da Rosa" >
                    </div>

                    <div class="author-info">

                        <div class="text">

                            <div>
                                <a href="https://www.instagram.com/pottereric/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>

                                <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank" target="_blank"><img src="../../../assets/img/icons/artstations-icon.png" alt="artstation icon"></a>
                            </div>

                            <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank">
                                <p style="white-space: nowrap;">Éric Gomes da Rosa
                                </p>
                            </a>

                        </div>

                    </div>
                    
                </li>

                <li class="card secondPlace">
                    
                    <div class="card-img">
                        <img src="../../../assets/img/challenges/aliendraw/2021/4º-edition-aliens-baseados-em-super-herois/second-place-emanuelle-froes.jpg" alt="Emanuelle Fróes" >
                    </div>

                    <div class="author-info">

                        <div class="text">

                            <div>
                                <a href="https://www.facebook.com/photo?fbid=1666571683535561&set=pcb.828384151135496" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                            </div>

                            <a href="/" target="_blank">
                                <p>Emanuelle Fróes</p>
                            </a>

                        </div>

                    </div>
                    
                </li>
                
                <li class="card thirdPlace">
                    
                    <div class="card-img">
                        <img src="../../../assets/img/challenges/aliendraw/2021/4º-edition-aliens-baseados-em-super-herois/third-place-kailane-nunes.jpg" alt="kaeni_art" >
                    </div>

                    <div class="author-info">

                        <div class="text">

                            <div>
                                <a href="https://www.instagram.com/kaeni_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                            </div>

                            <a href="https://www.instagram.com/kaeni_art/" target="_blank">
                                <p>kaeni_art</p>
                            </a>

                        </div>

                    </div>
                    
                </li>

        </ul       
        
    `
    console.log('março 2021')
    return ad2021MarTab
}

function alienDraw2021AbrTab(){

    let desafio1Abr2021 = `
        <ul class="grid-cards">
                                    
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/5º-edition-redesign/first-place-vinicius-lopez.jpg" alt="Vinicius Lopez" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100005176754322&sk=photos" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png"  alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/profile.php?id=100005176754322&sk=photos" target="_blank">
                            <p>Vinicius Lopez</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/5º-edition-redesign/second-place-andre-prates.jpg" alt="Andre Prates" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=1686101088249287&set=pcb.843539409619970" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=1686101088249287&set=pcb.843539409619970" target="_blank">
                            <p>Andre Prates</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/5º-edition-redesign/third-edition-kailane-nunes.jpg" alt="kaeni_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/kaeni_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/kaeni_art/" target="_blank">
                            <p>kaeni_art</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let desafio2Abr2021 = `
        <ul class="grid-cards">
                                
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/6º-edition-encanadores/first-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/6º-edition-encanadores/second-place-eric-gomes-da-rosa.jpg" alt="Éric Gomes da Rosa" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/pottereric/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>

                            <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank" target="_blank"><img src="../../../assets/img/icons/artstations-icon.png" alt="artstation icon"></a>
                        </div>

                        <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank">
                            <p style="white-space: nowrap;">Éric Gomes da Rosa
                            </p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/6º-edition-encanadores/third-place-kevin-henrique.jpg" alt="Retângulo 1" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/kevin.henrique.336" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/kevin.henrique.336" target="_blank">
                            <p>Kevin Henrique</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let ad2021AbrTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/permalink/843539409619970/" target="_blank">Redesign dos Aliens</a><br> Data: 16/04/2021 - 26/04/2021
            </p>
        </div>

        ${desafio1Abr2021}

        <!--DESAFIO 2-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/permalink/850058745634703/" target="_blank">Encanadores</a><br> Data: 27/04/21 - 07/05/21
            </p>
        </div>

        ${desafio2Abr2021}
        
    `
    console.log('abril 2021')
    return ad2021AbrTab
}

function alienDraw2021MaiTab(){

    let desafio1Mai2021 = `
        <ul class="grid-cards">
                            
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/7ª-edition-redesign-de-viloes/first-place-felipe-sabino.jpg" alt="fesenha" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/fesenha/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>

                            <a href="https://www.facebook.com/Fesenha-Arts-106001021180786" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png"  alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.instagram.com/fesenha/" target="_blank">
                            <p>fesenha</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/7ª-edition-redesign-de-viloes/second-place-tiago-flores.jpg" alt="Tiago Flores" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=3517086625057967&set=pcb.857232984917279" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=3517086625057967&set=pcb.857232984917279" target="_blank">
                            <p>Tiago Flores</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/7ª-edition-redesign-de-viloes/third-place-andre-prates.jpg" alt="Andre Prates" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank">
                            <p>Andre Prates</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let desafio2Maio2021 = `
        <ul class="grid-cards">
                            
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/8ª-edition-crossover/first-place-nadson-bezerra.jpg" alt="Nadzerra10" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://twitter.com/Nadzerra10?s=09&fbclid=IwAR0v0pBdle2MjLhWZ0zBMkXcrLQ-x0khjD2NWXd0KjLPzUNfSelm1d56gK4" target="_blank"><img src="../../../assets/img/icons/twitter-icon.png" alt="twitter icon"></a>
                        </div>

                        <a href="https://twitter.com/Nadzerra10?s=09&fbclid=IwAR0v0pBdle2MjLhWZ0zBMkXcrLQ-x0khjD2NWXd0KjLPzUNfSelm1d56gK4" target="_blank">
                            <p>Nadzerra10</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/8ª-edition-crossover/second-place-kaua-barros.jpg" alt="Kauã Barros" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/kaua_b_p/?utm_medium=copy_link&fbclid=IwAR3yicYglQISVYuO4Ng_SZbETumouZBPA3_NvOLYveEth9oeHy8jjB8oqag" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/kaua_b_p/?utm_medium=copy_link&fbclid=IwAR3yicYglQISVYuO4Ng_SZbETumouZBPA3_NvOLYveEth9oeHy8jjB8oqag" target="_blank">
                            <p>Kauã Barros</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/8ª-edition-crossover/third-place-joao-lucas-oliveira.jpg" alt="Retângulo 1" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let ad2021MaiTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/permalink/857232984917279" target="_blank">Redesign dos Vilões</a><br> Data: 10/05/2021 - 20/05/2021
            </p>
        </div>

        ${desafio1Mai2021}

        <!--DESAFIO 2-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/permalink/865361237437787/" target="_blank">Crossover</a><br> Data: 23/05/2021 - 02/06/2021
            </p>
        </div>

        ${desafio2Maio2021}
        
    `
    console.log('maio 2021')
    return ad2021MaiTab
}

function alienDraw2021JunTab(){

    let desafio1Jun2021 = `
        <ul class="grid-cards">
                            
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/9º-edition-aliens-com-dois-poderes/first-place-joao-pedro-nogueira.jpg" alt="João Pedro Nogueira" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo/?fbid=3594636277303001&set=pcb.872922200015024" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png"  alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo/?fbid=3594636277303001&set=pcb.872922200015024" target="_blank">
                            <p style="white-space: nowrap">João Pedro Nogueira</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/9º-edition-aliens-com-dois-poderes/second-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/9º-edition-aliens-com-dois-poderes/third-place-andre-prates.jpg" alt="Andre Prates" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank">
                            <p>Andre Prates</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let desafio2Jun2021 = `
        <ul class="grid-cards">
                            
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/10ª-edition-aliens-do-ben-como-waifus/first-place-vito-cantuaria.jpg" alt="icehito" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/icehito/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/icehito/" target="_blank">
                            <p>icehito</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/10ª-edition-aliens-do-ben-como-waifus/second-place-nadson-bezerra.jpg" alt="Nadzerra10" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://twitter.com/Nadzerra10?s=09&fbclid=IwAR0v0pBdle2MjLhWZ0zBMkXcrLQ-x0khjD2NWXd0KjLPzUNfSelm1d56gK4" target="_blank"><img src="../../../assets/img/icons/twitter-icon.png" alt="twitter icon"></a>
                        </div>

                        <a href="https://twitter.com/Nadzerra10?s=09&fbclid=IwAR0v0pBdle2MjLhWZ0zBMkXcrLQ-x0khjD2NWXd0KjLPzUNfSelm1d56gK4" target="_blank">
                            <p>Nadzerra10</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/10ª-edition-aliens-do-ben-como-waifus/third-place-eric-gomes-da-rosa.jpg" alt="Retângulo 1" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/pottereric/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>

                            <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank" target="_blank"><img src="../../../assets/img/icons/artstations-icon.png" alt="artstation icon"></a>
                        </div>

                        <a href="https://www.artstation.com/doutor?fbclid=IwAR2mGqAIdruxtnVURHn4ti7SHVUgbGf5b9mCsI12oLS7gqqCNDyjk-GdTk4" target="_blank">
                            <p style="white-space: nowrap;">Éric Gomes da Rosa
                            </p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `

    let ad2021JunTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/posts/872922200015024/" target="_blank">Aliens com dois poderes</a><br> Data: 07/06/2021 - 17/06/2021
            </p>
        </div>

        ${desafio1Jun2021}

        <!--DESAFIO 2-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/posts/880438859263358/" target="_blank">Aliens do Ben como Waifus</a><br> Data: 20/06/2021 - 30/06/2021
            </p>
        </div>

        ${desafio2Jun2021}
        
    `
    console.log('junho 2021')
    return ad2021JunTab
}

function alienDraw2021JulTab(){

    let ad2021JulTab = document.getElementById("nav-tab-content").innerHTML = `

        <!--DESAFIO 1-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/662503674390212/posts/872922200015024/" target="_blank">Aliens Ciberneticos/Cyberpunk</a><br> Data: 05/07/2021 - 15/07/2021
            </p>
        </div>

        <ul class="grid-cards">
                            
            <li class="card firstPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/11ª-edition-aliens-ciberneticos-cyberpunk/first-place-andre-prates.jpg" alt="Andre Prates" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=3517086695057960&set=pcb.857232984917279" target="_blank">
                            <p>Andre Prates</p>
                        </a>

                    </div>

                </div>
                
            </li>

            <li class="card secondPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/11ª-edition-aliens-ciberneticos-cyberpunk/second-place-joao-lucas-oliveira.jpg" alt="jeyel_art" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.instagram.com/jeyel_art/" target="_blank"><img src="../../../assets/img/icons/insta-icon.png" alt="instagram icon"></a>
                        </div>

                        <a href="https://www.instagram.com/jeyel_art/" target="_blank">
                            <p>jeyel_art</p>
                        </a>

                    </div>

                </div>
                
            </li>
            
            <li class="card thirdPlace">
                
                <div class="card-img">
                    <img src="../../../assets/img/challenges/aliendraw/2021/11ª-edition-aliens-ciberneticos-cyberpunk/third-place-icaro-andrade.jpg" alt="Ícaro Andrade" >
                </div>

                <div class="author-info">

                    <div class="text">

                        <div>
                            <a href="https://www.facebook.com/photo?fbid=3667363120030316&set=pcb.888898311750746" target="_blank"><img src="../../../assets/img/icons/facebook-icon.png" alt="Facebook icon"></a>
                        </div>

                        <a href="https://www.facebook.com/photo?fbid=3667363120030316&set=pcb.888898311750746" target="_blank">
                            <p>Ícaro Andrade</p>
                        </a>

                    </div>

                </div>
                
            </li>

        </ul>
    `
    console.log('julho 2021')
    return ad2021JulTab
}