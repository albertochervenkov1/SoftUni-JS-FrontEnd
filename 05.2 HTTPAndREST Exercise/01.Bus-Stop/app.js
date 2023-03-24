function getInfo() {
    const stopId = document.querySelector('#stopId')
    const stopName = document.querySelector('#stopName')
    const buses = document.querySelector('#buses')


    function createElementWithTextContent(tag, textContent) {
        const e = document.createElement(tag)
        e.textContent = textContent
        return e
    }

    buses.innerHTML='';
    const busInformation = 'http://localhost:3030/jsonstore/bus/businfo/'
    fetch(`${busInformation}${stopId.value}`).then(x => x.json()).then(x => {
        stopName.textContent = x['name']
        for (const key in x['buses']) {
            buses.appendChild(createElementWithTextContent('li', `Bus ${key} arrives in ${x['buses'][key]} minutes`))
        }
    }).catch(() => {
        stopName.textContent = 'Error'
    })

}
