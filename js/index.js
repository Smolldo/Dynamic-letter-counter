const refs = {
 str: document.querySelector('.symCount'),
 list: document.querySelector('.ansList')
}

const insertSymbols = (event) => {
    const znach = event.currentTarget.value;
    var result = [...znach].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    refs.list.textContent = `Object of symbols: ${JSON.stringify(result)}`;
}

refs.str.addEventListener('input', insertSymbols);

