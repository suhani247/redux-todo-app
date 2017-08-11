import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import todos from './src/reducers/todos'
import App from './src/components/App'

let store  = createStore(todos)

ReactDOM.render(
		<Provider store={store}>
		<App/>
		</Provider>,
		document.getElementById('root')
	);