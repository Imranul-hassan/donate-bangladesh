
// donation for noakhali
const donateButton = document.getElementById('donate-button').addEventListener('click', function(){
    
    const donateAmount = parseFloat(getInputFieldById('donate-amount'));

    const balance = parseFloat(getInputInnerTextById('balance'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title').innerText;

    if(!isNaN(donateAmount) && donateAmount > 0){
        
        const newBalance = balance + donateAmount;
        const remainingSavings = totalBalance - donateAmount;

        const balanceOfNoakhali = document.getElementById('balance');
        balanceOfNoakhali.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;
        
    } 
    else{
        alert('This is not a valid input')
    }
    
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md'
    historyItem.innerHTML =`
    <p> ${donateAmount} Taka ${donateTitle}  </p>
     <p> ${new Date().toLocaleString()} </p>

    `;
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)
   
})

// donation and history tab 

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab')

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#ABEF5F]');

    donationTab.classList.remove('bg-[#ABEF5F]');

    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#ABEF5F]');

    historyTab.classList.remove('bg-[#ABEF5F]');

     document.getElementById('history-container').classList.add('hidden');
     document.getElementById('donate-container').classList.remove('hidden');
})