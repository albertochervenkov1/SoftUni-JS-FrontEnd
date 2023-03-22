function lockedProfile() {
    const buttons=Array.from(document.getElementsByTagName('button'));
    buttons.forEach((b)=> {
        b.addEventListener('click', toggleInformation)
    });

    function toggleInformation(e){
        const btn=e.currentTarget;
        const currentProfile=btn.parentElement;
        const children=Array.from(currentProfile.children);
        const unlockedRadioBtn=children[4];
        const additionalInfoDiv=children[9];

        if (unlockedRadioBtn.checked) {
            if (btn.textContent==='Show more') {
                additionalInfoDiv.style.display='block';
                btn.textContent='Hide it';
            }
            else{
                additionalInfoDiv.style.display='none';
                btn.textContent='Show more';
            }
        }
        
    }
}