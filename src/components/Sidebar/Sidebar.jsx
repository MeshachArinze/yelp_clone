import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Listing from '../../components/Listing/Listing'
import styles from './styles.module.css'

export class Sidebar extends React.Component {
  onClick(place, map, google) {
    if (this.props.onListItemClick) {
      place.place = place;
      this.props.onListItemClick(place, map, google)
    }
  }
  render() {
    return (
      <div className={classnames(styles.sidebar)}>
        <div className={classnames(styles.heading)}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places}
                 onClick={this.onClick.bind(this)} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  places: Array,
  title: String,
  onListItemClick: Function
}

Sidebar.defaultProps = {
  title: 'Restaurants'
}

export default Sidebar
