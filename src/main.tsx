import { render } from 'soursop'
import App from './App'

import './style.css'

const container = document.querySelector('#app')!
render(<App/>, container)