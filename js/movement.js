document.getElementById('movement-donation-btn').addEventListener('click', function () {
    const getMovementInputValue = parseFloat(document.getElementById('movement-input-value').value);
    const movementAmount = parseFloat(document.getElementById('movement-amount').innerText);
    const myTotalAmount = parseFloat(document.getElementById('my-total-amount').innerText);
    const myCurrentBalance = myTotalAmount - getMovementInputValue;

    // validation 
    if (getMovementInputValue <= 0 || isNaN(getMovementInputValue)) {
        const getWarning3 = document.getElementById('warning-3');
        getWarning3.classList.remove('hidden');
        document.getElementById('movement-input-value').classList.remove('mb-4');

        const getWarning3_1 = document.getElementById('warning-3-1');
        getWarning3_1.classList.add('hidden');
        return
    }
    if (getMovementInputValue > myCurrentBalance) {
        const getWarning3_1 = document.getElementById('warning-3-1');
        getWarning3_1.classList.remove('hidden');
        document.getElementById('movement-input-value').classList.remove('mb-4');

        const getWarning3 = document.getElementById('warning-3');
        getWarning3.classList.add('hidden');
        return
    }


    // validation er por thik koreci 
    const getWarning3 = document.getElementById('warning-3');
    getWarning3.classList.add('hidden');

    const getWarning3_1 = document.getElementById('warning-3-1');
    getWarning3_1.classList.add('hidden');

    document.getElementById('movement-input-value').classList.add('mb-4');


    // add amount 
    // donate from my account

    document.getElementById('my-total-amount').innerText = myCurrentBalance;

    document.getElementById('movement-amount').innerText = getMovementInputValue + movementAmount;






    // create history description 
    const h4Tag3 = document.createElement('div');
    h4Tag3.innerHTML = `
        <h4>${getMovementInputValue} Taka is Donated Aid for Injured in the Quota Movement-2024 at Bangladesh</h4>
        <p>Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()}
        </p>
    `;

    h4Tag3.classList.add('p-8', 'border', 'rounded-lg', 'mb-4')

    const historySection = document.getElementById('history-section');
    historySection.prepend(h4Tag3)

    document.getElementById('movement-input-value').value = '';

})