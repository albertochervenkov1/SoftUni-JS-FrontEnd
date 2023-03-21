function extractText() {
    const elements=document.getElementsByTagName("li");

    let text="";
    for (let i = 0; i < elements.length; i++) {
        text += elements[i].innerHTML + "\n";
    }
    const resultTextArea=document.getElementById('result');

    resultTextArea.value=text;
}