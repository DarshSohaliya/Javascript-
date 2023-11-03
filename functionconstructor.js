function Demo(n,p,r){
    
    this.name = n
    this.price = p
    this.rating=r
   return this
//    return {x:10,y:278};
   
}
const p = new Demo("mac" , 1000000 , 5)
console.log(p);

let x ={
    p:Demo
}
x.p("airbuds", 1000,8)
console.log(x);