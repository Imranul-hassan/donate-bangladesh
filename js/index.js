
const donateButton = document.getElementById('donate-button').addEventListener('click', function(){
    
    const donateAmount = parseFloat(document.getElementById('donate-amount').value); 
    const balance = parseFloat(document.getElementById('balance').innerText);
    const totalBalance = parseFloat(document.getElementById('savings').innerText)

    const newBalance = balance + donateAmount;
    const remainingSavings = totalBalance - donateAmount;

    const balanceOfNoakhali = document.getElementById('balance');
    balanceOfNoakhali.innerText = newBalance;

    const afterDonateSavings = document.getElementById('savings');
    afterDonateSavings.innerText = remainingSavings;
   
})