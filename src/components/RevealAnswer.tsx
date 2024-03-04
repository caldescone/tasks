import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setBool(!bool)}>Reveal Answer</Button>
            {bool ? "42" : ""}
        </div>
    );
}
