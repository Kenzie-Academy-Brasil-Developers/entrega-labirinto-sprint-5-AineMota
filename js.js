
//CRIANDO O MAPA


const createMap = () =>{

    const main = document.querySelector('main');

    const map = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
    ];



    for(let i = 0; i < map.length; i++){
        const section = document.createElement('section');
        section.classList.add('flex');

        for(let j = 0; j < map[i].length; j++){
            let div = document.createElement('div');
            
            if(map[i][j] === 'W'){
                div.classList.add('W');
            }
            if(map[i][j] === 'S'){
                div.classList.add('start');
            }
            if(map[i][j] === 'F'){
                div.classList.add('F');
            }
            if(map[i][j] === ' '){
                div.classList.add('route');
            }
            div.id = 'linha' + i +'coluna' + j;
            section.appendChild(div);
        }
        main.appendChild(section);
    }

    const playerDiv = document.createElement('div');
    playerDiv.classList.add('pacman');

    const start = document.querySelector('.start');
    start.appendChild(playerDiv)
}

createMap();


//CONDIÇÃO DE VITÓRIA E REST

let win = () =>{
    const main = document.querySelector('main');

    while(main.firstChild){
        main.removeChild(main.firstChild);
    }

    const div = document.createElement('div');
    div.innerText = 'PARABENS, VOCÊ CONSEGUIU!!'
    div.classList.add('win');

    main.appendChild(div);

    const reset = document.createElement('button');
    console.log(reset)
    reset.innerText = 'Play Again';
    reset.classList.add('reset');

    main.appendChild(reset);

    
    const resetButton = document.querySelector('.reset')
    reset.addEventListener('click', resetGame)
}

let resetGame = () =>{
    const main = document.querySelector('main');

    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
    createMap();
}


//MOVIMENTO

let coluna = 0;
let linha = 9;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const player = document.querySelector('.pacman')

    if(keyName === 'ArrowDown'){
        linha += 1;
        player.classList.add('down')
    }
    if(keyName === 'ArrowUp'){
         linha -= 1;
        player.classList.add('up')
    }
    if(keyName === 'ArrowLeft'){
         coluna -= 1;
        player.classList.add('left')
    }
    if(keyName === 'ArrowRight'){
        coluna += 1;
    }


    let local = 'linha' + linha + 'coluna' + coluna;
    let nextDiv = document.querySelector('#' + local)

    if(nextDiv.className === 'W'){
        
        if(keyName === 'ArrowDown'){
            linha -= 1;
        }
        if(keyName === 'ArrowUp'){
             linha += 1;
        }
        if(keyName === 'ArrowLeft'){
             coluna += 1;
             
        }
        if(keyName === 'ArrowRight'){
            coluna -= 1;
        }
    }else if(nextDiv.className === 'F'){

        win();
    }else{
        nextDiv.appendChild(player);
    }
  });