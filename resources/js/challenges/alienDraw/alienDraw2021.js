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
                        <li>MAR</li>
                        <li>ABR</li>
                        <li>MAI</li>
                        <li>JUN</li>
                        <li>JUL</li>
                    </ul>
                </nav>

            </div>

            <!--NAV TAB CONTENT-->
            <div id="nav-tab-content" class="nav-tab-content-2021">

                

            </div>

        </div>
    `
    console.log('tab2021 teste2')
    return tab2021
}

function alienDraw2021JanTab() {

    console.log('s')

    let ad2021Jantab = document.getElementById("nav-tab-content").innerHTML = `

        <!--NAV TAB CONTENT-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/780047149272855/" target="_blank">Animais Mutantes do Dr.Animal</a><br> Data: 28/01/21 - 07/02/21
            </p>
        </div>

        <!--DESAFIO 1-->
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

    let ad2021Fevtab = document.getElementById("nav-tab-content").innerHTML = `

        <!--NAV TAB CONTENT-->
        <div class="challenge-theme">
            <p>
                Tema: <a href="https://www.facebook.com/groups/Ben10cidadedebaixo/permalink/787418341869069/" target="_blank">Folclore</a><br> Data: 10/02/21 - 20/02/21
            </p>
        </div>

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
        </ul>
    `
    console.log('fevereiro 2021')
    return ad2021Fevtab
}

