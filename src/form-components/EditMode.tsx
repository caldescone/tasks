import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [student, setStudent] = useState(true);
    const [name, setName] = useState("Your Name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(e) => setEditMode(e.target.checked)}
                />
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="formBasicTextBox">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            disabled={!editMode}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                <Form.Group controlId="form">
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        checked={student}
                        onChange={() => setStudent(!student)}
                        disabled={!editMode}
                    />
                </Form.Group>
            </div>
            <p>
                {name} is {student ? "a student" : "not a student"}
            </p>
        </div>
    );
}
