import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Loading,
  CodeSnippet
} from "carbon-components-react";
import ReactMarkdown from "react-markdown";
import Http from "../../services/httpMethod";

const LandingPage = () => {

  const [loading, setLoading] = React.useState(true);
  const [languages, setLanguages] = React.useState([]);

  React.useEffect(() => {
    getLanguages();
  }, [])
  
  const getLanguages = () => {
    console.log(process.env.REACT_APP_BASE_API_URL)

    Http.getAll('/languages').then((res) => {
      setLanguages(res.data);
      setLoading(false);
      console.log(languages);
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Home Page</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Welcome to Hello, World
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <div className="bx--col-md-7 bx--col-lg-7">

            {loading ?
              <Loading
                description="Active loading indicator" withOverlay={false}
              />
              : languages.map(language => (

                  <div>
                    <h4>{language.title}</h4>
                    <CodeSnippet type="multi">
                      <ReactMarkdown source={unescape(language.code_text)} />
                    </CodeSnippet>
                    <hr />
                  </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
