export class Input {
    constructor(parent, type, id, placeholder, value){
        this.parent = parent
        this.type = type
        this.id = id
        this.placeholder = placeholder
        this.value = value

        this.element = document.createElement('input')
        this.element.id = this.id
        this.element.placeholder = this.placeholder
        this.element.type = this.type

        this.handleChange = this.handleChange.bind(this)
        this.element.addEventListener('change', this.handleChange)

        this.init()
    }

    init () {
        console.log(`Votre component Input with id ${this.id} is ready`);
        this.render()
    }

    handleChange(e) {
        e.preventDefault()
        this.value = e.target.value
    }

    render () {
        this.parent.appendChild(this.element)
    }
}