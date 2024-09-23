
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

// donation for Feni

const donateOfFeni = document.getElementById('donate-button-feni').addEventListener('click', function(){
    
    const donateAmountOfFeni = parseFloat(getInputFieldById('donate-amount-feni'));

    const balance = parseFloat(getInputInnerTextById('balance-feni'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title-feni').innerText;

    if(!isNaN(donateAmountOfFeni) && donateAmountOfFeni > 0){
        
        const newBalance = balance + donateAmountOfFeni;
        const remainingSavings = totalBalance - donateAmountOfFeni;

        const balanceOfFeni = document.getElementById('balance');
        balanceOfFeni.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;
        
    } 
    else{
        alert('This is not a valid input')
    }

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md'
    historyItem.innerHTML =`
    <p> ${donateAmountOfFeni} Taka ${donateTitle}  </p>
     <p> ${new Date().toLocaleString()} </p>

    `;
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)

})

//donate of quota

const donateOfQuota = document.getElementById('donate-button-quota').addEventListener('click', function(){
    
    const donateAmountOfQuota = parseFloat(getInputFieldById('donate-amount-quota'));

    const balance = parseFloat(getInputInnerTextById('balance-quota'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title-quota').innerText;

    if(!isNaN(donateAmountOfQuota) && donateAmountOfQuota > 0){
        
        const newBalance = balance + donateAmountOfQuota;
        const remainingSavings = totalBalance - donateAmountOfQuota;

        const balanceOfQuota = document.getElementById('balance');
        balanceOfQuota.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;
        
    } 
    else{
        alert('This is not a valid input')
    }

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md'
    historyItem.innerHTML =`
    <p> ${donateAmountOfQuota} Taka ${donateTitle}  </p>
     <p> ${new Date().toLocaleString()} </p>

    `;
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)

})