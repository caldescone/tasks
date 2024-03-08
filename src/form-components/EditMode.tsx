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
                <Form.Group controlId="formBasicTextBox">
                    <Form.Label>
                        {name} is {student ? "a student" : "not a student"}
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter Name"
                        disabled={!editMode}
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formBasicCheckBox">
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        checked={student}
                        onChange={(e) => setStudent(e.target.checked)}
                        disabled={!editMode}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
