import React, { useState } from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader.js";
import Select2 from "react-select2-wrapper";
// react plugin that creates text editor
import ReactQuill from "react-quill";
import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const EditPage = () => {
  const [reactQuillValue, setReactQuillValue] = useState("");

  const handleReactQuillChange = (value) => {
    setReactQuillValue(value);
  };
  return (
    <>
      <SimpleHeader name="Edited elements" parentName="Edited" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Form Edited</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    {/* --------------title--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Title
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                      />
                    </FormGroup>
                    {/* --------------Description--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Description
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="3"
                        type="textarea"
                        placeholder="Description..."
                      />
                    </FormGroup>
                    {/* --------------Content--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Content
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="abcdxyz..."
                        type="text"
                      />
                    </FormGroup>
                    {/* --------------SelectBox--------- */}
                    <FormGroup className="selected-form">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Example select
                      </label>
                      <Select2
                        className="form-control"
                        defaultValue="1"
                        options={{
                          placeholder: "Select",
                        }}
                        data={[
                          { id: "1", text: "Alerts" },
                          { id: "2", text: "Badges" },
                          { id: "3", text: "Buttons" },
                          { id: "4", text: "Cards" },
                          { id: "5", text: "Forms" },
                          { id: "6", text: "Modals" },
                        ]}
                      />
                    </FormGroup>
                    {/* --------------Choose File--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Example choose files
                      </label>
                      <div className="custom-file">
                        <input
                          className="custom-file-input"
                          id="customFileLang"
                          lang="en"
                          type="file"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFileLang"
                        >
                          Select file
                        </label>
                      </div>
                    </FormGroup>
                    {/* --------------CheckBox_RadiosBox--------- */}
                    <FormGroup>
                      <Row>
                        <Col lg="6">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Example check boxes
                          </label>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="customCheck1"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Unchecked
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customCheck2"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Checked
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              disabled
                              id="customCheck3"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              Disabled Unchecked
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              disabled
                              id="customCheck4"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck4"
                            >
                              Disabled Checked
                            </label>
                          </div>
                        </Col>
                        <Col lg="6">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Example radios
                          </label>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio5"
                              name="custom-radio-1"
                              type="radio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio5"
                            >
                              Unchecked
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customRadio6"
                              name="custom-radio-1"
                              type="radio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio6"
                            >
                              Checked
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              disabled
                              id="customRadio7"
                              name="custom-radio-3"
                              type="radio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio7"
                            >
                              Disabled unchecked
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              disabled
                              id="customRadio8"
                              name="custom-radio-4"
                              type="radio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio8"
                            >
                              Disabled checkbox
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                    {/* --------------DateTime--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        DateTime
                      </label>
                      <Input
                        defaultValue="2018-11-23T10:30:00"
                        id="example-datetime-local-input"
                        type="datetime-local"
                      />
                    </FormGroup>
                    {/* --------------Date--------- */}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Date
                      </label>
                      <Input
                        defaultValue="2018-11-23"
                        id="example-date-input"
                        type="date"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Editor Example
                      </label>
                      <div
                        data-quill-placeholder="Quill WYSIWYG"
                        data-toggle="quill"
                      />
                      <ReactQuill
                        value={reactQuillValue}
                        onChange={handleReactQuillChange}
                        theme="snow"
                        modules={{
                          toolbar: [
                            ["bold", "italic"],
                            ["link", "blockquote", "code", "image"],
                            [
                              {
                                list: "ordered",
                              },
                              {
                                list: "bullet",
                              },
                            ],
                          ],
                        }}
                      />
                    </FormGroup>
                    {/* --------------Date--------- */}
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPage;
