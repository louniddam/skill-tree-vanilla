export class Skill {
    constructor(name, module, id){
        if(typeof name !== 'string'){
            console.warn(`Type of ${name} should be a String`);
            return
        }
        if(typeof id !== 'number'){
            console.warn(`Type of ${id} should be a Number`);
            return
        }

        this.name = name
        this.module = module
        this.id = id
    }
}