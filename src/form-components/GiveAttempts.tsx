import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formBasicAttemptBox">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Attempts you want to Add"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                />
            </Form.Group>
            <h1>Attempts: {attempts}</h1>
            <button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </button>
            <button
                onClick={() => setAttempts(attempts + parseInt(request || "0"))}
            >
                Gain
            </button>
        </div>
    );
}
