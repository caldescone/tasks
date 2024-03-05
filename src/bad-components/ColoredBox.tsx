import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ColoredBoxProps {
    setColorIndex: (colorIndex: number) => void;
    colorIndex: number;
}

function ChangeColor({
    colorIndex,
    setColorIndex
}: ColoredBoxProps): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: ColoredBoxProps): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const DEFAULT_COLOR_INDEX = 0;
    const [colorIndex, setColorIndex] = useState(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
