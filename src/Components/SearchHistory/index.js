import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class SearchHistory extends Component {
  state = {searchedFor: '', initialHistoryList: this.props.initialHistoryList}

  onSearched = event => {
    this.setState({searchedFor: event.target.value})
  }

  deleted = id => {
    this.setState(prevState => ({
      initialHistoryList: prevState.initialHistoryList.filter(
        item => item.id !== id,
      ),
    }))
  }

  render() {
    const {searchedFor, initialHistoryList} = this.state
    const initialHistoryList1 = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchedFor.toLowerCase()),
    )
    return (
      <div className="History-page">
        <div className="hearder">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-css"
            alt="app logo"
          />
          <div className="searchbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchIcon-css"
            />
            <input
              type="search"
              placeholder="Search history"
              value={searchedFor}
              className="searchBar-css"
              onChange={this.onSearched}
            />
          </div>
        </div>
        <ul className="ul">
          {initialHistoryList1.map(eachHistory => (
            <HistoryItem
              key={eachHistory.id}
              deleted={this.deleted}
              {...eachHistory}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchHistory
