// Donation & History btn toggle fetures

document.getElementById('history-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    const cardSection = document.getElementById('card-section');


    // history btn 
    historyBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('border', 'border-red-300');

    //donation btn
    donationBtn.classList.remove('bg-[#B4F461]');
    donationBtn.classList.add('border', 'border-red-300');

    // hide image card section
    cardSection.classList.add('hidden')

    // remove hidden form history description
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')



})

document.getElementById('donation-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    const cardSection = document.getElementById('card-section');

    // history btn 
    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('border', 'border-red-300');

    //donation btn
    donationBtn.classList.add('bg-[#B4F461]');
    donationBtn.classList.remove('border', 'border-red-300');

    //remove hidden image card section
    cardSection.classList.remove('hidden')

    // add hidden to history description
    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')

})


// flood donation section

document.getElementById('flood-donation-btn').addEventListener('click', function () {
    const getFloodInputValue = parseFloat(document.getElementById('flood-donation-field').value);
    const floodAmount = parseFloat(document.getElementById('flood-amount').innerText);
    const myTotalAmount = parseFloat(document.getElementById('my-total-amount').innerText);
    const myCurrentBalance = myTotalAmount - getFloodInputValue;
    // console.log(myCurrentBalance,myTotalAmount, getFloodInputValue)

    // validation 
    if (getFloodInputValue >= myCurrentBalance) {
        const getWarning1_1 = document.getElementById('warning-1-1');
        getWarning1_1.classList.remove('hidden');
        document.getElementById('flood-donation-field').classList.remove('mb-4');

        const getWarning1 = document.getElementById('warning-1');
        getWarning1.classList.add('hidden');
        return
    }

    if (getFloodInputValue <= 0 || isNaN(getFloodInputValue)) {
        const getWarning1 = document.getElementById('warning-1');
        getWarning1.classList.remove('hidden');
        document.getElementById('flood-donation-field').classList.remove('mb-4');

        const getWarning1_1 = document.getElementById('warning-1-1');
        getWarning1_1.classList.add('hidden');
        return
    }


    // validation er por thik koreci 
    const getWarning1 = document.getElementById('warning-1');
    getWarning1.classList.add('hidden');

    const getWarning1_1 = document.getElementById('warning-1-1');
    getWarning1_1.classList.add('hidden');

    document.getElementById('flood-donation-field').classList.add('mb-4');


    // add amount 
    // donate from my account

    document.getElementById('my-total-amount').innerText = myCurrentBalance;

    document.getElementById('flood-amount').innerText = getFloodInputValue + floodAmount;






    // create history description 
    const h4Tag = document.createElement('div');
    h4Tag.innerHTML = `
        <h4>${getFloodInputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
        <p>Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()}
        </p>
    `;

    h4Tag.classList.add('p-8', 'border', 'rounded-lg', 'mb-4')

    const historySection = document.getElementById('history-section');
    historySection.prepend(h4Tag)

    document.getElementById('flood-donation-field').value = '';
})



