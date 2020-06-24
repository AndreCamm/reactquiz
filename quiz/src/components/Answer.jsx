import React from "react"

export default function Answer(props) {
    return (
        <button value={props.letter} className="answer" {...props}>
            <span className="letter">{props.letter}.</span> {props.answer}
        </button>
    )
}
