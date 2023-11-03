// class ComplexNumber{
//     #real;
//     #imag;
//     constructor(r,i){
//         this.#real = r
//         this.#imag =i
//     }
//     display(){
//         console.log(this.#real , this.#imag);
        
//     }
//     //  get real(){
//     //     return this.#real
//     //  }
//     //  get imag(){
//     //     return this.#imag
//     //  }
//     addComplexNumber(){
//         this.#real += c.#real
//         this.#imag += c.#imag
//     }
// }

// const c = new ComplexNumber(2,4)
// c.display()
// const c2 = new ComplexNumber(5,7)
// c2.addComplexNumber(c)
// c2.display()

             

class ComplexNumber{
    #real;
    #imag;
    constructor(r,i){
        this.#real =r
        this.#imag= i
    }

    display(){
        console.log(this.#real , this.#imag);

    }
    
    addnum(){
        this.#real += c.#real
        this.#imag += c.#imag
    }
}

const c =new ComplexNumber(2,4)
c.display()
const c1 = new ComplexNumber(7,4)
c1.addnum(c)
c1.display()