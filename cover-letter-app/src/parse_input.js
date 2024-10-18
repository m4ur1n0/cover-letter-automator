
const parse_input = (text_input) => {
    let outputStr = "";
    let lines = text_input.split('\n');
    let line;
    for (line in lines) {
        outputStr += lines[line] + "[NEWLINE]";
    }

    // at this point we have successfully tested proof of concept
    // outputStr is a var that holds the input text with the newlines separated by this escape cahracter

    console.log(outputStr);
}

export default parse_input;