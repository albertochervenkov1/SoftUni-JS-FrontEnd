function solve() {
   const searchInput=document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRows=Array.from(document.querySelectorAll('tbody tr'));
      const searchedWord=searchInput.value;

      for (const row of tableRows) {
         let trimmedTextContent=row.textContent.trim();
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }

         if (trimmedTextContent.includes(searchedWord)) {
            row.classList.add('select');
         }
      }
      searchInput.value='';
   }
}