import React from 'React'
import { Provider } from 'react-redux'

import Portfolio from '../containers/portfolio'


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  )
}

export default Root
