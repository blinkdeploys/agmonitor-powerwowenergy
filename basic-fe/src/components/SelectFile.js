import React from "react";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

export function SelectFile({fileChoices, currentSelection, onSelect}) {
    /**
     * file_choices: list of file name
     * Current_selection: may be null.  Selected file
     */
    if (!fileChoices || fileChoices.length === 0) {
        return <div>Waiting for data load</div>
    }
    return (
        <Row>
            <Col>
                <Form>
                    <FormGroup>
                        <Label for={"file-selector"}>Select file</Label>
                        <Input id={"selectedFile"}
                               name={"selectedFile"}
                               onChange={onSelect}
                               type={"select"}>
                            {fileChoices.map((choice) => {
                                return (<option selected={currentSelection === choice}>{choice}</option>);
                            })}
                        </Input>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}