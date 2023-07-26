let style = document.createElement("style");
styling = `
#container{
    display: grid;
    justify-content: center;
    text-align: center;
    font-family: monospace;
}
form#postForm {
    display: grid;
    text-align: left;
    gap: 0.8rem;
}

button#submit {
    width: 39%;
    padding: 6px;
    font-size: 13px;
    margin-right: auto;
    margin-left: auto;
    background: transparent;
    border: 1px 5px solid grey;
}

table#todoTable {
    border: 2px solid grey;
}

th {
    border: 2px solid grey;
    padding: 6px;
    background: yellow;
}
td {
    border: 2px solid grey;
    background: transparent;
}
div#todo {
    margin-top: 1rem;
    display: grid;
    border: 2px solid grey;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

label#succMsg {
    margin: 15px;
}

button#delete {
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

`
document.head.append(style)
style.append(styling)

let parentDiv = document.createElement("div");
parentDiv.setAttribute("id", "container");
document.body.append(parentDiv);

let form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("id", "postForm");
parentDiv.appendChild(form)

let Head = document.createElement("h2");
Head.innerHTML = "TO DO LIST USING ONLY JAVASCRIPT"
form.appendChild(Head)

let label = document.createElement("label")
label.innerHTML = "Enter Title: "
form.append(label)

let title = document.createElement("input")
title.setAttribute("type", "text");
title.setAttribute("id", "title")
form.append(title)

let label1 = document.createElement("label")
label1.innerHTML = " Enter Notes: "
form.append(label1)

let notes = document.createElement("textarea")
notes.setAttribute("type", "text");
notes.setAttribute("id", "notes")
form.append(notes)

let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Save";
submitBtn.setAttribute("id", "submit")
form.append(submitBtn)


let message = document.createElement("label");
message.setAttribute("id", "succMsg");
parentDiv.appendChild(message)

let thHead = ['Title', 'Notes', 'Time', 'Delete']
let todo = document.createElement("div");
todo.setAttribute("id", "todo");
document.body.appendChild(todo)

let table = document.createElement("table");
table.setAttribute("id", "todoTable");
todo.appendChild(table)

let tableHead = (theade) => {
  for (let a in theade) {
    let th = document.createElement("th");
    table.appendChild(th)
    th.innerHTML = theade[a]
  }
}
tableHead(thHead);


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let t = title.value;
  let n = notes.value;
  let deleteBtn;
  let date = new Date()
  let currentDate = date.toLocaleTimeString();
  if (t != null && n != null) {
    localStorage.setItem(t, n);
    message.innerHTML = "Todo List saved Successfully !!!"
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${t}</td> <td>${n}</td> <td>${currentDate}</td>`
    deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    deleteBtn.setAttribute("id", "delete")
    tr.append(deleteBtn)
    table.appendChild(tr)
  } else {
    message.innerHTML = "Error in processing inputs"
  }
  title.value = ""
  notes.value = ""
  setInterval(() => {
    message.innerHTML = ""
  }, 3000)


  deleteBtn.addEventListener('click', (e) => {
    let tdConatiner = e.target.parentNode;
    let tdlocal = e.target.parentNode.firstChild.innerHTML;
    localStorage.removeItem(tdlocal);
    tdConatiner.remove();
  })
})






