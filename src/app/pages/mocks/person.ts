 export class person{

    name: string;
    email: string;

    constructor(){
      
    }
     setName(name:string)
    {
        this.name = name;
    }

    setEmail(email:string){

        this.email = email;
    }
    getName(){
        return this.name;
    }

    getEmail(){

        return this.email
    }
}