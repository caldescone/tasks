import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function start(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <Button onClick={start} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
