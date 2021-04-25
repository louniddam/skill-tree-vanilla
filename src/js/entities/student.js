export class Student {
    constructor(name) {
        if(typeof name !== 'string'){
            console.warn(`The type of ${name} should be a string`);
            return
        }
        this.name = name
    }
}