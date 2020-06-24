import React from "react"
import Progress from "./components/Progress"
import Question from "./components/Question"
import Answers from "./components/Answers"
import "./App.css"

const App = (props) => {
    const [totalQuestions, setTotalQuestions] = React.useState(0)
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [questions, setQuestions] = React.useState({})

    const [points, setPoints] = React.useState(0)

    React.useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        fetch(
            "https://opentdb.com/api.php?amount=3&category=9&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results[0].question)
                setTotalQuestions(data.results.length)
                setQuestions(data.results)
            })
    }

    const nextQuestion = () => {
        if (currentQuestion <= 1) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
        }
    }

    const addPoints = () => {
        console.log("addidicidi")
        setPoints((points) => points + 1)
        nextQuestion()
    }

    return (
        <div className="container">
            Score: {points}
            <Progress total={totalQuestions} current={currentQuestion + 1} />
            {questions.length > 0 && (
                <>
                    <Question question={questions[currentQuestion].question} />
                    <Answers
                        incorrectAnswers={
                            questions[currentQuestion]["incorrect_answers"]
                        }
                        correctAnswer={
                            questions[currentQuestion]["correct_answer"]
                        }
                        addPoints={addPoints}
                    />
                </>
            )}
            {currentQuestion + 1 < totalQuestions ? (
                <button
                    onClick={() => nextQuestion()}
                    className="btn btn-primary"
                >
                    Confirm and Continue
                </button>
            ) : (
                <button
                    onClick={() => nextQuestion()}
                    className="btn btn-primary"
                >
                    Twinsen melhor jogo
                </button>
            )}
        </div>
    )
}

export default App
