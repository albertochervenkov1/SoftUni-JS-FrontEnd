function deleteByEmail() {
    const result=document.getElementById('result');
    let inputValue=document.querySelector('input[name="email"]').value;
    const evenTds=Array.from(document.querySelectorAll('td:nth-child(even)'));

    let foundElement=evenTds.find((td)=> td.textContent === inputValue);

    if (foundElement) {
        result.textContent='Deleted';
        foundElement.parentElement.remove();
    }
    else{
        result.textContent='Not found.';
    }
}