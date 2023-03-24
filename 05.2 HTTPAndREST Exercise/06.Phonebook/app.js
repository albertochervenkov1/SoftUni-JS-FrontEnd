function attachEvents() {
    const phonebookContainer=document.getElementById('phonebook');
    const personInput=document.getElementById('person');
    const phoneInput=document.getElementById('phone');
    const loadBtn=document.getElementById('btnLoad');
    const createBtn=document.getElementById('btnCreate');
    const BASE_URL='http://localhost:3030/jsonstore/phonebook/';

    loadBtn.addEventListener('click', loadPhonebookHandler);
    createBtn.addEventListener('click', createPhoneBookHandler)

    async function loadPhonebookHandler(){
        const phoneBookRes=await fetch(BASE_URL);
        const phonebookData=await phoneBookRes.json();
        const values=Object.values(phonebookData);
        phonebookContainer.innerHTML='';
        for (const {phone, person, _id} of values) {
            const li=document.createElement('li');

            const button=document.createElement('button');
            button.textContent='Delete';
            button.id=_id;
            button.addEventListener('click', deletePhonebookHandler);

            li.innerHTML=`${person}: ${phone}`;
            li.appendChild(button);
            phonebookContainer.appendChild(li);
        }
    }

    async function createPhoneBookHandler(){
        const person=personInput.value;
        const phone=phoneInput.value;
        const httpHeaders={
            method: 'POST',
            body: JSON.stringify({person, phone})
        }
        fetch(BASE_URL,httpHeaders)
        .then((res) => res.json)
        .then(()=>{
            loadPhonebookHandler();
            personInput.value='';
            phoneInput.value='';
        })
        .catch((err)=> {
            console.error(err);
        })
    }
    
    async function deletePhonebookHandler(){
        const id=this.id;
        const httpHeaders={
            method:'DELETE'
        };
        fetch(`${BASE_URL}${id}`,httpHeaders)
        .then((res)=> res.json)
        .then(loadPhonebookHandler)
        .catch((err)=>{
            console.error(err);
        })
    }
}

attachEvents();