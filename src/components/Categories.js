import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

export default class Categories extends React.Component {
  getIcon = (id) => {
    if (this.props.activeCategories.indexOf(id) > -1) {
        return faToggleOn
    }
    return faToggleOff
  }

  render() {
    return (
      <Dialog onClose={this.props.onHandleClose} open={this.props.open}
              aria-labelledby="customized-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={this.props.onHandleClose}>
            Filter
        </DialogTitle>
        <DialogContent>
      <ul id="category">
        {Object.values(this.props.data).map((category, index) =>
          <li key={index} onClick={() => this.props.toggleCategory(category.id)}>
            <FontAwesomeIcon icon={this.getIcon(category.id)} /> {category.name}
          </li>
        )}
      </ul>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={this.props.onHandleClose} color="primary">
            Schließen
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
