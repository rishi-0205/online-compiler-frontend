async function submitCodeToJudge0(code, language, stdin) {
  const options = {
    params: {
      wait: true,
      base64_encoded: true,
    },
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    headers: {
      "Content-Type": "application/json", // Set content type for JSON data
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com", // Replace with your host
      "x-rapidapi-key": "afda77f490msh8e67d8d005fe1b3p176f15jsn335b4823ba6f", // Replace with your key
    },
    body: JSON.stringify({
      // Encode code as JSON

      source_code: code,
      language_id: language,
      stdin: stdin,
      // Set language (default to JavaScript: 63)
    }),
  };

  try {
    const response = await fetch(options.url, options);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error submitting code:", error);
    // Handle errors appropriately
  }
}

// Usage example remains the same:
const myCode = `console.log('Hello from Judge0!');`;
const language = "javascript"; // Optional: Specify language if needed

// submitCodeToJudge0(myCode, language)
//   .then((data) => {
//     console.log("Judge0 execution results:", data); // Process the output
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

async function getSubmissionOutput(submissionId) {
  const options = {
    method: "GET", // Use GET for checking status
    url: `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}?base64_encoded=true&fields=*`, // Update URL based on documentation
    headers: {
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com", // Replace with your host
      "x-rapidapi-key": "afda77f490msh8e67d8d005fe1b3p176f15jsn335b4823ba6f", // Replace with your key
    },
  };

  try {
    const response = await fetch(options.url, options);
    const data = await response.json();
    const deco = atob(data.stdout);
    // console.log(data);
    // console.log(deco);
    return deco; // Handle the response data as needed (e.g., extract output)
  } catch (error) {
    console.error("Error getting submission output:", error);
    // Handle errors appropriately
  }
}

export async function submitAndRetrieveOutput(code, language, stdin) {
  const submissionData = await submitCodeToJudge0(code, language, stdin);
  const submissionId = submissionData.token; // Assuming ID is in a property called "id"

  // Wait a bit for Judge0 execution (adjust delay as needed)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const outputData = await getSubmissionOutput(submissionId);

  return outputData;
}
