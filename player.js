// select button of Neymar jr
document.getElementById('btn1').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const neymarElement = document.getElementById('neymar-jr');
        const neymarName = neymarElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(neymarName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn1').disabled = true;
    }
})
// select button of leonel Messi
document.getElementById('btn2').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const messiElement = document.getElementById('Leonel-Messi');
        const messiName = messiElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(messiName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn2').disabled = true;
    }
})
// select button of C. Ronaldo
document.getElementById('btn3').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const ronaldoElement = document.getElementById('c-ronaldo');
        const ronaldoName = ronaldoElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(ronaldoName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn3').disabled = true;
    }
})
// select button of K. Mbappy
document.getElementById('btn4').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const mbappyElement = document.getElementById('M-bappy');
        const mbappyName = mbappyElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(mbappyName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn4').disabled = true;
    }
})
// select button of Robert Lowandoski
document.getElementById('btn5').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const lowandoskiElement = document.getElementById('robert-lowan');
        const lowandoskiName = lowandoskiElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(lowandoskiName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn5').disabled = true;
    }
})
// select button of Robert Lowandoski
document.getElementById('btn6').addEventListener('click', function() {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const harykaneElement = document.getElementById('harry-kane');
        const harykaneName = harykaneElement.innerText;
        const orderList = document.getElementById('order-list');

        const li = document.createElement('li');
        const liText = document.createTextNode(harykaneName)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById('btn6').disabled = true;
    }
})