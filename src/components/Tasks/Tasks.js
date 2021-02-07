import React from 'react'
import './Tasks.css'
import Buttons from '../Buttons/Buttons'

class Tasks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: props.tasks,
			task: 0,
			totalScores: 0
		}
	}

	changeQuestionForWrong = () => {
		this.setState({
			task: this.state.task + 1
		})
	}

	changeQuestionForCorrect = () => {
		this.setState({
			task: this.state.task + 1,
			totalScores: this.state.totalScores + 5
		})
	}

	restartQuiz = () => {
		this.setState({task: 0, totalScores: 0})
	}

	shuffleFourAnswer = () => {
		const { tasks, task } = this.state
		let num = Math.floor(Math.random() * 4)
		if (num == 0 ) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 2) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 3) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong}  className='answer' >{tasks[task].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[2]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
				</div>
			)
			
		} else {
			return (
				<div><h1>function "shuffleFourAnswer" error ಥ_ಥ</h1></div>
			)
		}
	}

	shuffleTwoAnswer = () => {
		const { tasks, task } = this.state
		let num = Math.floor(Math.random() * 2)
		if(num == 0) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[0]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{tasks[task].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{tasks[task].correct_answer}</button>
				</div>
			)
		} else {
			return (
				<div><h1>function "shuffleTwoAnswer" error ಥ_ಥ</h1></div>
			)
		}
	}

	render() {
		const { tasks, task } = this.state
		return (
		<div className='tc'>
			{
				this.state.task < this.props.tasks.length
				? 
				<div className='questionAndAnswers ma2 tc'>
					<div className='question'><h4 className='tc'>{tasks[task].question}</h4></div>
					{
						tasks[task].incorrect_answers.length == 1 
						?
						this.shuffleTwoAnswer()
						:
						this.shuffleFourAnswer()
					}
					<p>help from creator "Think Before You Click" ^-^</p>
				</div>

				: 
				<div className='tc'>
					<h1>Your Total Scores Are...</h1>
					<h1 className='tc'>{`${this.state.totalScores}`}</h1>
					<button onClick={this.props.getQuiz} className='button'>new quiz</button>
					<button onClick={this.restartQuiz} className='button'>reset quiz</button>
				</div>
			}
		</div>
			
		)
	}
} 


export default Tasks