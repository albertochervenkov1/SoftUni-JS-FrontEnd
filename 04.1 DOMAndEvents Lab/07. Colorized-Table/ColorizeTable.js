function colorize() {
    const evenTrs=Array.from(document.querySelectorAll('tr:nth-child(even)'));
    evenTrs.forEach((e) => e.style.backgroundColor ='Teal');
}