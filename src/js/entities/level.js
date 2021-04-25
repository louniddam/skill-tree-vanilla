export class Level {
    constructor(level, name) {
        if(typeof level !== 'number'){
            console.warn(`The of ${level} should be an integer`);
            return
        }
        if(typeof name !== 'string'){
            console.warn(`The of ${name} should be an string`);
            return
        }

        this.level = level
        this.name = name
    }
}