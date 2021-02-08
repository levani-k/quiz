import React from 'react'
import SelectQuizType from './components/SelectQuizType/SelectQuizType'



class App extends React.Component{
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

 // fetch different categories name and id
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
        <SelectQuizType categories={this.state.categories}/>
      </div>
    )
  }
}

export default App;
