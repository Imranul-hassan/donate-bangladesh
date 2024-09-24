
// get input value
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// get input innerText
function getInputInnerTextById(id){
    const inputValue = document.getElementById(id).innerText;
    return inputValue;
}

// history 

function addToHistory(donateAmount, donateTitle){
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-slate-100 p-3 rounded-md border-2 my-3 mx-10'
    historyItem.innerHTML =`
    <p> ${donateAmount} Taka ${donateTitle}  </p>
     <p> ${new Date().toLocaleString()} </p>

    `;
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)
}