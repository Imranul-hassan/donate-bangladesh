
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
    
    const donateAmount = getInputFieldById('donate-amount');

    const balance = parseFloat(getInputInnerTextById('balance'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title').innerText;

    if(!isNaN(donateAmount) && donateAmount > 0){
        
        const donateAmountFloat = parseFloat(donateAmount)
        const newBalance = balance + donateAmountFloat;
        const remainingSavings = totalBalance - donateAmountFloat;

        const balanceOfNoakhali = document.getElementById('balance');
        balanceOfNoakhali.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;

        document.getElementById('my_modal_5').showModal();

        addToHistory(donateAmountFloat, donateTitle)
        
    } 
    else{
        alert('This is not a valid input')

    }   
   
})

// donation for Feni

const donateOfFeni = document.getElementById('donate-button-feni').addEventListener('click', function(){
    
    const donateAmountOfFeni = getInputFieldById('donate-amount-feni');

    const balance = parseFloat(getInputInnerTextById('balance-feni'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title-feni').innerText;

    if(!isNaN(donateAmountOfFeni) && donateAmountOfFeni > 0){
        
        const donateAmountOfFeniFloat = parseFloat(donateAmountOfFeni)
        const newBalance = balance + donateAmountOfFeniFloat;
        const remainingSavings = totalBalance - donateAmountOfFeniFloat;

        const balanceOfFeni = document.getElementById('balance-feni');
        balanceOfFeni.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;

        document.getElementById('my_modal_5').showModal();

        addToHistory(donateAmountOfFeniFloat, donateTitle)
        
    } 
    else{
        alert('This is not a valid input')
    }
  

})


//donation for quota movement

const donateOfQuota = document.getElementById('donate-button-quota').addEventListener('click', function(){
    
    const donateAmountOfQuota = getInputFieldById('donate-amount-quota');

    const balance = parseFloat(getInputInnerTextById('balance-quota'));
    const totalBalance = parseFloat(getInputInnerTextById('savings'));
    const donateTitle = document.getElementById('donate-title-quota').innerText;

    if(!isNaN(donateAmountOfQuota) && donateAmountOfQuota > 0){
        
        const donateAmountOfQuotaFloat = parseFloat(donateAmountOfQuota)
        const newBalance = balance + donateAmountOfQuotaFloat;
        const remainingSavings = totalBalance - donateAmountOfQuotaFloat;

        const balanceOfQuota = document.getElementById('balance-quota');
        balanceOfQuota.innerText = newBalance;

        const afterDonateSavings = document.getElementById('savings');
        afterDonateSavings.innerText = remainingSavings;

        document.getElementById('my_modal_5').showModal();

        addToHistory(donateAmountOfQuotaFloat, donateTitle)
        
    } 
    else{
        alert('This is not a valid input');

    }
   
})