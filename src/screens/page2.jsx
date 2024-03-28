import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { xcodeDark } from "@uiw/codemirror-themes-all";
import { submitAndRetrieveOutput } from "./output.js";

const PageTwo = () => {
  const [code, setCode] = useState("");
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("cpp");
  var langId = 54;
  const onChange = React.useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const onRun = () => {
    submitAndRetrieveOutput(code, langId, stdin)
      .then((output) => {
        setOutput(output);
        console.log("Judge0 output:", output);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onClear = () => {
    setCode("");
    setOutput("");
    setStdin("");
  };

  let languageStream;
  switch (language) {
    case "cpp":
      languageStream = langs.cpp();
      langId = 54;
      break;
    case "java":
      languageStream = langs.java();
      langId = 91;
      break;
    case "javascript":
      languageStream = langs.javascript();
      langId = 93;
      break;
    case "python":
      languageStream = langs.python();
      langId = 92;
      break;
    default:
      languageStream = langs.cpp();
      langId = 54;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100vh",
          width: "50vw",
          marginLeft: "40px",
        }}
      >
        <h2>Online Compiler</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "85vh",
            width: "43vw",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "nowrap",
              width: "100%",
              height: "8%",
              backgroundColor: "#1c1c1c",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <select
              value={language}
              onChange={handleLanguageChange}
              style={{
                height: "30px",
                width: "120px",
                boxSizing: "border-box",
                fontSize: "16px",
                border: "1px solid #000",
                marginLeft: "20px",
              }}
            >
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
            <button
              onClick={onClear}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                height: "35px",
                width: "100px",
                backgroundColor: "#780000",
                marginRight: "20px",
              }}
            >
              Clear
            </button>
          </div>
          <div
            style={{
              width: "100%",
              height: "92%",
              backgroundColor: "#292A30",
              borderRadius: "0px 0px 20px 20px",
              overflow: "auto",
            }}
          >
            <CodeMirror
              value={code}
              onChange={onChange}
              height="100%"
              width="100%"
              theme={xcodeDark}
              extensions={languageStream}
              style={{
                fontSize: "16px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "1px",
          height: "100vh",
          backgroundColor: "#000",
          position: "absolute",
          left: "50%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100vh",
          width: "50vw",
        }}
      >
        <div
          style={{
            height: "70px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "85vh",
            width: "43vw",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "nowrap",
              height: "40vh",
              width: "43vw",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "nowrap",
                width: "100%",
                height: "20%",
                backgroundColor: "#1c1c1c",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <button
                onClick={onRun}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "35px",
                  width: "100px",
                  backgroundColor: "#096E00",
                  marginRight: "20px",
                }}
              >
                Run
              </button>
            </div>
            <div
              style={{
                width: "100%",
                height: "92%",
                backgroundColor: "#292A30",
                borderRadius: "0px 0px 20px 20px",
                overflow: "auto",
              }}
            >
              <textarea
                value={stdin}
                onChange={(e) => {
                  setStdin(e.target.value);
                }}
                style={{
                  height: "90%",
                  width: "90%",
                  backgroundColor: "#292A30",
                  border: "none",
                  outline: "none",
                  resize: "none",
                }}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "nowrap",
              height: "40vh",
              width: "43vw",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "nowrap",
                width: "100%",
                height: "30%",
                backgroundColor: "#1c1c1c",
                borderRadius: "20px 20px 0px 0px",
                marginTop: "30px",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "92%",
                backgroundColor: "#292A30",
                borderRadius: "0px 0px 20px 20px",
                overflow: "auto",
              }}
            >
              <p
                style={{
                  height: "80%",
                  width: "100%",
                  backgroundColor: "#292A30",
                  border: "none",
                }}
              >
                {output}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
