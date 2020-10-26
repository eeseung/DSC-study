var list = document.getElementById('list');
var button = document.getElementById('button-addon2');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);

function clickButton() {
    var li = document.createElement('li');

    li.setAttribute("id", "li" + count);
    li.setAttribute("class", "list-group-item");
    li.setAttribute("checked", "unchecked");

    li.innerHTML = "<label style='margin:0px; padding:0px;'><input type='checkbox' class='checkbox' id='checkbox" + count + "' value='" + input.value + "' onClick='check(" + count + ")'>" + input.value + "</label>";
    li.innerHTML += "<button class='btn btn-sm btn-danger' id='delete' onclick='remove(" + count + ")'>삭제</button>";
    li.innerHTML += "<button class='btn btn-sm btn-secondary' id='update' onclick='updateIn(" + count + ")'>수정</button>";
    list.appendChild(li);

    input.value = "";
    count++;
}
    
function check(count) {
    var li = document.getElementById("li"+count);
    if(li.getAttribute("checked") == "checked") li.setAttribute("checked", "unchecked");
    else li.setAttribute("checked", "checked");
}

function remove(count) {
    var result = confirm("삭제하시겠습니까?");
    if(result) {
        var li = document.getElementById("li" + count);
        list.removeChild(li);
    }
}

function updateIn(count) {
    var li = document.getElementById("li" + count);
    var updateinput = document.getElementById("checkbox" + count);

    li.innerHTML =  "<label style='margin:0px; padding:0px;'><input type='checkbox' class='checkbox' id='checkbox" + count + "' value='" + updateinput.value+ "' onClick='check(" + count + ")'><input type='text' id='updateinput" + count + "' value='"+ updateinput.value + "'></label>";
    li.innerHTML += "<button class='btn btn-sm btn-danger' id='delete' onclick='remove(" + count + ")'>삭제</button>";
    li.innerHTML += "<button class='btn btn-sm btn-secondary' id='update' onclick='updateOut(" + count + ")'>확인</button>";
    
    li.replaceWith(li);

    if(li.getAttribute("checked")=="checked") document.getElementById("checkbox" + count).checked = true;
}

function updateOut(count) {
    var li = document.getElementById("li" + count);
    var confirminput = document.getElementById("updateinput" + count);

    li.innerHTML =  "<label style='margin:0px; padding:0px;'><input type='checkbox' class='checkbox' id='checkbox" + count + "' value='" + confirminput.value + "' onClick='check(" + count + ")'>" + confirminput.value + "</label>";
    li.innerHTML += "<button class='btn btn-sm btn-danger' id='delete' onclick='remove(" + count + ")'>삭제</button>";
    li.innerHTML += "<button class='btn btn-sm btn-secondary' id='update' onclick='updateIn(" + count + ")'>수정</button>";
    
    li.replaceWith(li);

    if(li.getAttribute("checked")=="checked") document.getElementById("checkbox"+count).checked = true;
}
