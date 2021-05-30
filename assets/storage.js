const KEY = "history";

function checkStorage(){
    return typeof(Storage) !== "undefined";
}

function addHistory(data){
    if(checkStorage()){
        let historyData = null;
        if(localStorage.getItem(KEY) === null){
            historyData = [];
        }else{
            historyData = JSON.parse(localStorage.getItem(KEY));
        }

        historyData.unshift(data);

        if(historyData.length > 5){
            historyData.pop();
        }

        localStorage.setItem(KEY,JSON.stringify(historyData))

        console.log(historyData);
    }

}

function showHistory(){
    if(checkStorage()){
        return JSON.parse(localStorage.getItem(KEY) || []);
    }else{
        return [];
    }
}

function renderHistory(){
    const historyData = showHistory();
    let historyList = document.querySelector('#historyList');

    historyList.innerHTML = "";

    for(let history of historyData){
        const row = document.createElement('tr');

        row.innerHTML = `<td>${history.firstNumber}</td>`
        row.innerHTML += `<td>${history.operator}</td>`
        row.innerHTML += `<td>${history.secondNumber}</td>`
        row.innerHTML += `<td>${history.result}</td>`

        historyList.appendChild(row);
    }
}

renderHistory();