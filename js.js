
//CRIANDO O MAPA
let walls = [];

const bloqueio = (player, block) => {
    let distanceX = (player.style.left + player.style.width/2) - (block.x + block.width/2);
    let distanceY = (player.style.top + player.style.height/2) - (block.y + block.height/2);

    let sumWidth = (player.style.width + block.width)/2
    let sumHeigth = (player.style.height + block.height)/2

    if(Math.abs(distanceX) < sumWidth && Math.abs(distanceY) < sumHeigth){
        let collisionX = sumWidth - Math.abs(distanceX);
        let collisionY = sumHeigth - Math.abs(distanceY);

            if(collisionX > collisionY){
                if(distanceY > 0){
                    player.y += collisionY;
                }else{
                    player.y -= collisionY; 
                }
            }else{
                if(distanceX > 0){
                    player.x += collisionX;
                }else{player.x -= collisionX}
            }
    }
}

const createMap = () =>{

    const body = document.querySelector('body');

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
        "S      W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
    ];

    for(let section in map){
        for (let div in map[section]){
            let item = map[section][div];
            if(item === 'W'){
                let wall = {
                    x: 22.5 * div,
                    y: 33 * section,
                    width: 22.5,
                    height: 33
                };
                walls.push(wall);
            }
        }
    }



    for(let i = 0; i < map.length; i++){
        const section = document.createElement('section');
        section.classList.add('flex');

        for(let j = 0; j < map[i].length; j++){
            let div = document.createElement('div');
            
            if(map[i][j] === 'W'){
                div.classList.add('W');
            }
            if(map[i][j] === 'S'){
                div.classList.add('pacman');
            }
            if(map[i][j] === 'F'){
                div.classList.add('F');
            }
            if(map[i][j] === ' '){
                div.classList.add('route');
            }
            section.appendChild(div);
        }
        body.appendChild(section);
    }
}

onload = createMap();

//MOVIMENTO
const player = document.querySelector('.pacman')

let boxTop = 297;
let boxLeft = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if(keyName === 'ArrowDown'){
        boxTop += 33;
    }
    if(keyName === 'ArrowUp'){
         boxTop -= 33;
    }
    if(keyName === 'ArrowLeft'){
         boxLeft -= 22.5;
    }
    if(keyName === 'ArrowRight'){
         boxLeft += 22.5;
    }

    for(let i in walls){
        let block = walls[i];
        bloqueio(player,block);
    }

    document.getElementsByClassName("pacman").style.top = boxTop + "px";
    return document.getElementsByClassName("pacman").style.left = boxLeft + "px";
  });