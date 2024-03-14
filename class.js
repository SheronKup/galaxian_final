class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    draw_img(){
        let img = new Image()
        img.src = this.a
        draw.drawImage(img,this.x, this.y, this.w, this.h)
    }
}

class Ship extends Obj{
dir = 0
pts = 0
vida = 5

anim(nome){
    this.time += 1
    if(this.time > 12){
        this.time = 0
        this.frame += 1
    }
    if(this.frame > 4){
        this.frame = 1
    }
    this.a = "assets/" + nome + this.frame + ".png"
}

atual_ship(){
    this.x += this.dir
        if(this.x <= 12){
            this.x = 12
        }else if(this.x >= 438){
            this.x = 438
        }
}
point(){

}

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
}


enemy(){

}

atual_enemy(){

}

redo(){

}

shot(){

}

atual_shot(){

}

redo(){

}

draw_space(){

}

redo(){

}


 class Text{
    
 } 
