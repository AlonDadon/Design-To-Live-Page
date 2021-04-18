'use strict'


function onInit() {
    renderCards()
}

function renderCards() {
    let cards = getCards()
    let strHtml = cards.map((card, idx) => `
        <div class="card flex">
            <img src="img/${idx + 1}.jpg" alt="">
            <div class="card-info flex" >
                <h2>Duis aute irure dolor in
                    henderit in voluptate.</h2>

                <p>Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commo doconsequat, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    </p>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur...</p>
                <button class="card-btn btn-read " onclick="">Continue reading   </button>
            </div>
        </div>
        </div>
    `)
    document.querySelector('.card-container').innerHTML = strHtml.join('')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}


