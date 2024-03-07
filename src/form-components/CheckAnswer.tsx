import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                    placeholder="Enter Answer"
                />
            </Form.Group>
            <div>The Answer is {answer === expectedAnswer ? "✔️" : "❌"}.</div>
            <h3>Check Answer</h3>
        </div>
    );
}
