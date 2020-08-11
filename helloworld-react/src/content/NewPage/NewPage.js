import React from "react";
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  TextInput,
} from "carbon-components-react";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import Http from "../../services/httpMethod";
import 'react-markdown-editor-lite/lib/index.css';

const NewPage = () => {
  const mdParser = new MarkdownIt();

  const initialNewLanguageState = {
    title: "",
    code: "",
    code_html: "",
    code_text: ""
  };

  const [newLanguage, setNewLanguage] = React.useState(initialNewLanguageState);

  const handleTitleChange = event => {
    const { name, value } = event.target;
    setNewLanguage({ ...newLanguage, [name]: value });
  };

  const handleEditorChange = ({ html, text }) => {
    var escaped_editor_html = escape(html);
    var escaped_editor_text = escape(text);

    setNewLanguage({ ...newLanguage, code_html: escaped_editor_html, code_text: escaped_editor_text });
  };

  const submit = () => { 
    // setLoading(true);
    Http.post('/language', newLanguage ).then((res) => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    })
    .then(function () {
      setNewLanguage(initialNewLanguageState);
    }); 
  };

  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row new-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Home Page</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/new">New</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Add new Hello World code
          </h1>
        </div>
      </div>
      <div className="bx--row new-page__r1">

        <div className="bx--col-md-7 bx--col-lg-7">
          <Form>
            <FormGroup>
              <h4>Language</h4>
              <TextInput
                helperText="Type the name of the programming language"
                id="test2"
                name="title"
                placeholder="Placeholder text"
                onChange={handleTitleChange}
                value={newLanguage.title}
              />
            </FormGroup>
            <FormGroup>
              <h4>Type code here</h4>
              <MdEditor
                value={newLanguage.code}
                style={{ height: "400px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
              />
            </FormGroup>
            
          </Form>

          <Button
              kind="primary"
              tabIndex={0}
              type="submit"
              onClick={submit}
            >
              Submit
            </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPage;