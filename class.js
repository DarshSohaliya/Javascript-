class Demo{
    // #name;
    // #price;
    #rating;

    constructor(n,p,r){
        this.name = n
        this.price = p
        this.#rating=r
        console.log("calling theb con...");
        return this
        
    }
    
    static custom(){
        console.log("Thi is Static");
    }
    
    getRating(){
        console.log(this.#rating);
    }
    setRating(r){
        if(r<0) return
        this.#rating=r 
    }
    display(){
        // console.log(this);
        console.log("hey how are you",this.name,this.price,this.rating);
    }
}

const p = new Demo("iphone",100000,5)
console.log(p);
p.display()
p.setRating(54)
p.getRating()
//  console.log(p.rating);
// p.rating =10
// console.log(p.rating);
// p.name = "Samsung"
// console.log(p.name);
Demo.custom()
