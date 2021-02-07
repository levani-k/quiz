import React from 'react'
import './Buttons.css'
import Tasks from '../Tasks/Tasks.js'
import Type from '../Type/Type'

class Buttons extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			categories: props.categories,
			trivia_category: '',
			trivia_difficulty: '',
			trivia_amount: 10,
			tasks: [],
			triger: false
		}
	}

	handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    getQuiz = () => {
    	fetch(`https://opentdb.com/api.php?amount=${this.state.trivia_amount}&category=${this.state.trivia_category}&difficulty=${this.state.trivia_difficulty}`)
    	.then(response => response.json())
    	.then(data => {
    		this.setState({
    			tasks: data.results,
            	triger: !this.state.triger
        	})
    	})
    	
    }
	
	render() {
		return(
			this.state.triger 

			? 

			<Tasks tasks={this.state.tasks} getQuiz={this.getQuiz} /> 

			:

			<div>
				<Type />
				<div className='allButtons tc'>
					<select value={this.state.trivia_category} name="trivia_category" className="button" onChange={this.handleChange}>
						<option value="any">Select Category</option>
						<option value="9">General Knowledge</option><option value="10">Entertainment: Books</option>
						<option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option>
						<option value="13">Entertainment: Musicals &amp; Theatres</option>
						<option value="14">Entertainment: Television</option>
						<option value="15">Entertainment: Video Games</option>
						<option value="16">Entertainment: Board Games</option>
						<option value="17">Science &amp; Nature</option>
						<option value="18">Science: Computers</option>
						<option value="19">Science: Mathematics</option>
						<option value="20">Mythology</option>
						<option value="21">Sports</option>
						<option value="22">Geography</option>
						<option value="23">History</option>
						<option value="24">Politics</option>
						<option value="25">Art</option>
						<option value="26">Celebrities</option>
						<option value="27">Animals</option>
						<option value="28">Vehicles</option>
						<option value="29">Entertainment: Comics</option>
						<option value="30">Science: Gadgets</option>
						<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
						<option value="32">Entertainment: Cartoon &amp; Animations</option>		
					</select>
					<select value={this.state.trivia_difficulty} name="trivia_difficulty" className="button" onChange={this.handleChange}>
						<option value="any">Select Difficulty</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
					<button className="button" onClick={this.getQuiz}>Start</button>
				</div>
				<p className='tc ma2'>here is our rules If your answer turns out to be correct you will get 5 points otherwise you will lose 2 points</p>
			</div>
			
		)
	}
}


export default Buttons