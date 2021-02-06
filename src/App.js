import React from 'react'
import Buttons from './components/Buttons/Buttons'



class App extends React.Component{
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }


  componentDidMount(){
    fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => {
      this.state.categories.push(data.trivia_categories)
    })
  }
  render() {
    return(
      <div>
        <Buttons categories={this.state.categories}/>
      </div>
    )
  }
}

export default App;
