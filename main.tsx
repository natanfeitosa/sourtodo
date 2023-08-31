import { render } from 'soursop'
import App from './src/App'

import './src/style.css'

const container = document.querySelector('#app')!
render(<App/>, container)
