import React from 'react'
import './SelectQuizType.css'
import Tasks from '../Tasks/Tasks'

class SelectQuizType extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			trivia_category: '',
			trivia_difficulty: '',
			QAarray: [],
			isTaskDisplayed: false
		}
	}

	// save data of inputs in this.state
	handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    // fetch quiz By user-entered criteria, then change isTaskDisplayed to true and clean up input values in state
    getQuiz = () => {
    	fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.trivia_category}&difficulty=${this.state.trivia_difficulty}`)
    	.then(response => response.json())
    	.then(data => {
    		this.setState({
    			QAarray: data.results,
            	isTaskDisplayed: !this.state.isTaskDisplayed,
            	trivia_category: '',
            	trivia_difficulty: ''
        	})
    	})
    	
    }
	
	render() {
		const { QAarray, trivia_difficulty, trivia_category, isTaskDisplayed } = this.state
		return(
			isTaskDisplayed 
			? 
			<Tasks QAarray={QAarray} getQuiz={this.getQuiz} /> 
			:
			<div>
				<div className='tc'>
					<h1 className='tc'>please select category and difficulty</h1>
					<h3>"A winner is a dreamer who never gives up"</h3>
				</div>
				<div className='allButtons tc'>
					{	// check both fields if they are not empty, display dificulty and then category, when they are entered display start button
						trivia_difficulty != '' && trivia_category != '' 
						?
							<button className="button" onClick={this.getQuiz}>Start</button>
						: 
							trivia_difficulty != ''
						?
							<select value={trivia_category} name="trivia_category" className="button" onChange={this.handleChange}>
								<option value="any">Select Category</option>
								{
									this.props.categories[0].map((genre, index) => {
										return (
											<option key={index} value={genre.id}>{genre.name}</option>
										)
									})
								}
							</select>
						:
							<select value={this.state.trivia_difficulty} name="trivia_difficulty" className="button" onChange={this.handleChange}>
								<option value="any">Select Difficulty</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
					}
				</div>
				<p className='tc ma2'>here is our rules If your answer turns out to be correct you will get 5 points</p>
			</div>
			
		)
	}
}


export default SelectQuizType