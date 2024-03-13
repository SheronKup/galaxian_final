class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
}

class Ship extends Obj{
dir = 0
pts = 0
vida = 5

draw_ship(){

}

// atual_ship(){
//     this.x += this.dir
//     if(this.x <= 2){
//         this.x = 2
//     }else if(this.x >= 416 ){
//     this.x = 416
//     } 
// }

colid(){
    if((this.x < objeto.x + objeto.w)&&
    (this.x + this.w > objeto.x)&&
    (this.y < objeto.y + objeto.h)&&
    (this.y + this.h > objeto.y)){
        return true
    }else{
          false
    }
}

enemy(){

}

atual_enemy(){

}

shot(){
    let grupoTiros = [] 
    let tiros = {
    des(){
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })
        }
    }
}

atual_shot(){

}

draw_space(){

}

redo(){
    enemy()
    shot()
    draw_space()
}

}
 class Text{
    
 } 
