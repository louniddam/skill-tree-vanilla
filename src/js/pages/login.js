import { Input } from '../components/input'
import { Button } from '../components/button'

const App = document.getElementById('app-login');

class Login {
    constructor(props){
        const {id, parent, callback} = props

        this.id = id
        this.parent = parent
        this.callback = callback

        this.element = document.createElement('form')
        this.element.id = 'login'

        this.nameInput = new Input(this.element, 'text', 'username', 'John Doe', '')
        this.passwordInput = new Input(this.element, 'password', 'password', '*******', '')
        this.submitButton = new Button(this.element, 'btn-sub', 'Login')

        this.handleSubmit = this.handleSubmit.bind(this)

        this.submitButton.element.addEventListener('click', this.handleSubmit)

        this.init()
    }

    handleSubmit (e) {
        e.preventDefault()
        console.log(`name: ${this.nameInput.value}`);
        console.log(`password: ${this.passwordInput.value}`);
    }

    init () {
        this.render()
    }

    render () {
        this.parent.appendChild(this.element)
    }
}

const login = new Login({id: 'login-form', parent: App})