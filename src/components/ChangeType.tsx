import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("multiple_choice_question");
    return (
        <span>
            <Button onClick={() => setType("short_answer_question")}>
                Change Type
            </Button>
        </span>
    );
}
