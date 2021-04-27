export class Button {
    constructor(parent, id, innerHTML) {
        this.parent = parent
        this.id = id
        this.innerHTML = innerHTML

        this.element = document.createElement('button')
        this.element.innerHTML = this.innerHTML
        this.element.id = this.id

        this.init()
    }

    init() {
        this.render()
    }

    render () {
        this.parent.appendChild(this.element)
    }
}