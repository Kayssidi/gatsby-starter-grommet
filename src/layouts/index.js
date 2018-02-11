import React from 'react'
import PropTypes from 'prop-types'

// Grommet
import App from 'grommet/components/App'
import Footer from 'grommet/components/Footer'
import MenuHeader from '../components/menuHeader';

// Styles
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <App centered={false}>

	<MenuHeader/>

        {this.props.children()}

	<Footer/>

      </App>
    )
  }
}
