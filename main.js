let draw = document.getElementById('draw').getContext('2d')

// let carro = new Carro(225,600,50,80,'darkblue')
let ship = new Ship1(225,580,45,100)
// let c2 = new Carro2(400,-40,50,80,'orange')
let ship2 = new Ship2(400,-40,45,100)
// let c3 = new Carro2(200,-280,50,80,'red')
let ship3 = new Ship3(200,-280,45,100)
let sp = new Space(2,2,10,696,'yellow')

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

// let background = new Audio('./assets/motor.wav')
// let ship = new Audio('./assets/motor.wav')
// background.volume = 0.8
// ship.loop = true

let play = true


document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        carro.dir -= 5
    }else if(e.key === 'd'){
        carro.dir += 5
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        carro.dir = 0
    }else if(e.key === 'd'){
        carro.dir = 0
    }
})

function game_over(){
    if(ship.life <=0){
        lay = false
        background.pause()
        // música com o jogo parado
    }
}

function points(){
    if(ship.point(c2)){
        ship.pts +=1
    }else if(ship.point(c3)){
        ship.pts += 1
    }
}

function colid(){
    if(ship.colid(c2)){
        ship.life -= 1
        ship2.redo()
       
    }else if(ship.colid(c3)){
        ship.life -= 1
        ship3.redo()
       
    } 
}

function draw(){
    t1.draw_text('Pontos: ',360,24,'yellow','26px Times')
    t2.draw_text(ship.pts,460,24,'yellow','26px Times')
    t3.draw_text('Vida: ',40,24,'yellow','26px Times')
    t4.draw_text(ship.vida,100,24,'yellow','26px Times')

    if(play){
        ee.des_estrada()
        ed.des_estrada()
        ec1.des_estrada()
        ec2.des_estrada()
        ec3.des_estrada()
        ec4.des_estrada()
        ec5.des_estrada()
        ec6.des_estrada()
        ec7.des_estrada()
        c2.des_img()
        c3.des_img()
        carro.des_img()
    }else{
        ee.des_estrada()
        ed.des_estrada()
        t5.des_text('Game Over',120,340,'yellow','46px Times')
    }  
}
function atualiza(){
    if(jogar){
        motor.play()
        ec1.mov_est()
        ec2.mov_est()
        ec3.mov_est()
        ec4.mov_est()
        ec5.mov_est()
        ec6.mov_est()
        ec7.mov_est()
        c2.atual_carro2()
        c3.atual_carro2()
        carro.atual_carro()
        carro.anim('carro_01_')
        pontos()
        colisao()
        game_over()
    }
    

}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,10)