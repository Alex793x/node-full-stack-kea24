const { readFile, writeFile } = require('fs');
// Function to read a JS file and convert it to a JSON string
function convertJsFileToJsonString(inputFilePath, outputFilePath) {
  readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Create an object with the JS content as a string
    const dataToWrite = {
      code: data
    };

    // Write the object to a JSON file
    writeFile(outputFilePath, JSON.stringify(dataToWrite, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing the JSON file:", writeErr);
        return;
      }

      console.log(`The file has been converted and saved as ${outputFilePath}`);
    });
  });
}

convertJsFileToJsonString(__dirname + "/codeExamples/loopsDont.js", __dirname + "/codeExamples/loopsDont.json");