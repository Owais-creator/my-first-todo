let allTodos = []

const addtodo = (event)=>{
    event.preventDefault()
    let todoTobeADD = document.getElementById("todo").value

    allTodos.push(todoTobeADD)

    console.log(allTodos)

    showtodo()
}

const showtodo = () =>{

    document.getElementById("alltodo").innerHTML = ""

    allTodos.map((todo,index)=>{
        document.getElementById("alltodo").innerHTML +=`
        <li>${todo}</li>
        `
    })
}