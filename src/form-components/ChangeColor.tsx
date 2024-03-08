import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState("black");
    const COLORS = [
        "black",
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink"
    ];
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <div>
                    {COLORS.map((c) => (
                        <Form.Check
                            key={c}
                            type="radio"
                            name="color"
                            onChange={(event) => setColor(event.target.value)}
                            id={`color-${c}`}
                            label={
                                <span style={{ backgroundColor: c }}>{c}</span>
                            }
                            value={c}
                            checked={color === c}
                        />
                    ))}
                </div>
            </div>
            <span>You have chosen </span>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
