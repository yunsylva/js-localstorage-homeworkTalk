//DOM
var sendBtn = document.querySelector('.send');
var ulList = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('todoText'))||[];

//監聽"加入代辦"和"刪除"鈕
sendBtn.addEventListener('click', addList, false);
ulList.addEventListener('click', deleteList, false); //監聽父元素
//開啟網頁便渲染清單
showList(data);

//加入陣列及local storage
function addList(e) {    
    e.preventDefault();
    //將輸入的值加入陣列
    var todoText = document.querySelector('.text').value;
    // 不得輸入空白
    if (todoText === ""){
        return;
    }
    data.push(todoText); 
    showList(data); 
    //將data轉為字串並存入localStorage
    localStorage.setItem('todoText', JSON.stringify(data)); 
}

//更新清單畫面
function showList(){
    document.querySelector('.text').value = "";
    str = "";
    data.forEach((item,index) => {
        str += `<li>
                <button class="delete" data-index = ${index}><span class="material-icons">
                delete_forever</span></button>${item}
                </li>`;
    });    
    ulList.innerHTML = str;
}

//刪除項目
function deleteList(e) {
    e.preventDefault();
    console.log(e.target);
    if(e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'SPAN'){
        return;
    };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('todoText', JSON.stringify(data));
    // 重新渲染清單
    showList(data);
}