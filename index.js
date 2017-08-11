import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import todoApp from './src/reducers/index'
import App from './src/components/App'

let store  = createStore(todoApp)

ReactDOM.render(
		<Provider store={store}>
		<App/>
		</Provider>,
		document.getElementById('root')
	);