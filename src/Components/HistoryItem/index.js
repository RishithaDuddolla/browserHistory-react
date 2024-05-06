import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  deleteClicked = () => {
    const {deleted, id} = this.props
    deleted(id)
  }

  render() {
    const {timeAccessed, logoUrl, title, domainUrl} = this.props
    return (
      <li className="li">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="list">
          <p>{timeAccessed}</p>
        </div>
        <div>
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={this.deleteClicked}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem
