export class Module {
    constructor(id, name) {
        if(typeof id !== 'number'){
            console.warn(`The of ${id} should be an integer`);
            return
        }
        if(typeof name !== 'string'){
            console.warn(`The of ${name} should be an string`);
            return
        }
        
        this.id = id
        this.name = name
    }
}