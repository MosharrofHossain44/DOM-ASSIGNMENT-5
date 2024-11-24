document.getElementById('relief-donation-btn').addEventListener('click', function () {
    const getReliefInputValue = parseFloat(document.getElementById('relief-input-field').value);
    const reliefAmount = parseFloat(document.getElementById('relief-amount').innerText);
    const myTotalAmount = parseFloat(document.getElementById('my-total-amount').innerText);
    const myCurrentBalance = myTotalAmount - getReliefInputValue;

    // validation 
    if (getReliefInputValue <= 0 || isNaN(getReliefInputValue)) {
        const getWarning2 = document.getElementById('warning-2');
        getWarning2.classList.remove('hidden');
        document.getElementById('relief-input-field').classList.remove('mb-4');

        const getWarning2_1 = document.getElementById('warning-2-1');
        getWarning2_1.classList.add('hidden');
        return
    }
    if (getReliefInputValue > myCurrentBalance) {
        const getWarning2_1 = document.getElementById('warning-2-1');
        getWarning2_1.classList.remove('hidden');
        document.getElementById('relief-input-field').classList.remove('mb-4');

        const getWarning2 = document.getElementById('warning-2');
        getWarning2.classList.add('hidden');
        return
    }


    // validation er por thik koreci 
    const getWarning2 = document.getElementById('warning-2');
    getWarning2.classList.add('hidden');

    const getWarning2_1 = document.getElementById('warning-2-1');
    getWarning2_1.classList.add('hidden');

    document.getElementById('relief-input-field').classList.add('mb-4');


    // add amount 
    // donate from my account

    document.getElementById('my-total-amount').innerText = myCurrentBalance;

    document.getElementById('relief-amount').innerText = getReliefInputValue + reliefAmount;






    // create history description 
    const h4Tag2 = document.createElement('div');
    h4Tag2.innerHTML = `
        <h4>${getReliefInputValue} Taka is Donated for Flood Relief-2024 at Feni, Bangladesh</h4>
        <p>Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()}
        </p>
    `;

    h4Tag2.classList.add('p-8', 'border', 'rounded-lg', 'mb-4')

    const historySection = document.getElementById('history-section');
    historySection.prepend(h4Tag2)

    document.getElementById('relief-input-field').value = '';
})