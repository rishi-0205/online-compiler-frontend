import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { xcodeDark } from "@uiw/codemirror-themes-all";

const PageOne = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const onChange = React.useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  let languageStream;
  switch (language) {
    case "cpp":
      languageStream = langs.cpp();
      break;
    case "java":
      languageStream = langs.java();
      break;
    case "javascript":
      languageStream = langs.javascript();
      break;
    case "python":
      languageStream = langs.python();
      break;
    default:
      languageStream = langs.cpp();
  }

  return (
    <>
      <h2
        style={{
          position: "absolute",
          left: "43px",
          top: "15px",
        }}
      >
        Online Compiler
      </h2>
      <div>
        <div
          style={{
            position: "absolute",
            left: "43px",
            top: "90px",
            boxSizing: "border-box",
            width: "650px",
            height: "657px",
            backgroundColor: "#2a2a2a",
          }}
        >
          <div
            style={{
              position: "relative",
              left: "0px",
              top: "0px",
              backgroundColor: "#1c1c1c",
              width: "650px",
              zIndex: "2",
              height: "57px",
              borderBottom: "1px solid #000",
            }}
          >
            <select
              value={language}
              onChange={handleLanguageChange}
              style={{
                position: "relative",
                left: "24px",
                top: "12px",
                height: "30px",
                width: "120px",
                boxSizing: "border-box",
                fontSize: "16px",
                border: "1px solid #000",
              }}
            >
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
            <button
              onClick={() => setCode("")}
              style={{
                position: "relative",
                left: "400px",
                top: "12.5px",
                height: "35px",
                width: "100px",
                backgroundColor: "#780000",
              }}
            >
              Clear
            </button>
          </div>
          <CodeMirror
            value={code}
            onChange={onChange}
            height="600px"
            width="650px"
            theme={xcodeDark}
            extensions={languageStream}
            style={{
              position: "relative",
              top: "0px",
              left: "0px",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor: "#000",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "840px",
          top: "80px",
          boxSizing: "border-box",
          width: "650px",
          height: "225px",
          backgroundColor: "#292A30",
        }}
      >
        <div
          style={{
            position: "relative",
            left: "0px",
            top: "-16px",
            backgroundColor: "#1c1c1c",
            width: "650px",
            height: "57px",
            borderBottom: "1px solid #000",
          }}
        >
          <p
            style={{
              position: "relative",
              left: "10px",
              top: "13px",
            }}
          >
            Input required for code
          </p>
          <button
            onClick={() => setCode("")}
            style={{
              position: "relative",
              left: "400px",
              top: "12.5px",
              height: "35px",
              width: "100px",
              backgroundColor: "#780000",
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default PageOne;
