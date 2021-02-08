import React from 'react'
import './Tasks.css'
import SelectQuizType from '../SelectQuizType/SelectQuizType'

class Tasks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			QAarray: props.QAarray,
			currentTask: 0,
			totalScores: 0
		}
	}

	changeQuestionForWrong = () => {
		this.setState({
			currentTask: this.state.currentTask + 1
		})
	}

	changeQuestionForCorrect = () => {
		this.setState({
			currentTask: this.state.currentTask + 1,
			totalScores: this.state.totalScores + 5
		})
	}

	restartQuiz = () => {
		this.setState({currentTask: 0, totalScores: 0})
	}

	shuffleFourAnswer = () => {
		const { QAarray, currentTask } = this.state
		let num = Math.floor(Math.random() * 4)
		if (num == 0 ) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 2) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 3) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong}  className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
				</div>
			)
			
		} else {
			return (
				<div><h1>function "shuffleFourAnswer" error ಥ_ಥ</h1></div>
			)
		}
	}

	shuffleTwoAnswer = () => {
		const { QAarray, currentTask } = this.state
		let num = Math.floor(Math.random() * 2)
		if(num == 0) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
				</div>
			)
		} else {
			return (
				<div><h1>function "shuffleTwoAnswer" error ಥ_ಥ</h1></div>
			)
		}
	}

	render() {
		// destructure states
		const { QAarray, currentTask, totalScores } = this.state
		return (
		<div className='tc'>
			{
				currentTask < this.props.QAarray.length
				? 
				<div className='questionAndAnswers ma2 tc'>
					<div className='question'><h4 className='tc'>{QAarray[currentTask].question}</h4></div>
					{
						QAarray[currentTask].incorrect_answers.length == 1 
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
					<h1 className='tc'>{`${totalScores}`}</h1>
					{
						totalScores <= 0 ? <h4>Are you kidding me???</h4> : totalScores <= 40 ? <h4>that's okey</h4> : <h4>Wow I Levani kistauri, will declare you as the champion</h4>
					}
					<button onClick={this.props.getQuiz} className='button'>new quiz</button>
					<button onClick={this.restartQuiz} className='button'>reset quiz</button>
				</div>
			}
		</div>
			
		)
	}
} 


export default Tasks