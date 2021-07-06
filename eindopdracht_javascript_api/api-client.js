const API_URL = 'http://localhost:3000/'
const id = document.getElementById("input");





const myToDoList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myToDoList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");


    span.className = "close";
    span.appendChild(txt);
    span.appendChild(post)
    myToDoList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let I;
for (I = 0; I < close.length; I++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);


const newElement = () => {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Schrijf iets in je lijst!");
    } else {
        document.getElementById("mytodo").appendChild(li);
    }
    document.getElementById("input").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = "closeBtns"
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}


const butt = document.getElementById("add");
butt.addEventListener("click", (event) => {

    newElement();
    postData()
});

const myForm = document.getElementById("myDIV");
myForm.addEventListener("add", function (e) {


    const formData = new FormData(this);
    fetch(API_URL, {
        method: "post",
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text)
    }).catch(function (error) {
        console.error(error);
    })

});

const APIRequest = (method, id) => {

    const data = { description: "name:", done: false };
    const headers = {
        method: method,
        id: id,

        body: JSON.stringify(data),

        headers: { "Content-type": "application/json" },
    }

    return headers;
}


const getData = async () => {
    try {
        const response = await fetch(API_URL, APIRequest('GET'));
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}


const postData = async (todo) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}

postData()

const closeBtn = document.getElementById("closeBtns");
closeBtn.addEventListener("click", function (e) {
    e.preventDefault();


});



const myDataObject = { id }
const deleteData = async () => {

    const response = await fetch(API_URL, myDataObject, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myDataObject)
    });

    const data = await response.json();


    console.log(data);
};
deleteData();