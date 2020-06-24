import React from "react"
import Answer from "./Answer"

function Answers(props) {
    return (
        <>
            {console.log(props)}
            <Answer
                letter="A"
                answer={props.correctAnswer}
                onClick={() => props.addPoints()}
            />
            {props.incorrectAnswers &&
                props.incorrectAnswers.length > 0 &&
                props.incorrectAnswers.map((option, key) => {
                    return <Answer key={key} letter="A" answer={option} />
                })}
        </>
    )
}

export default Answers
