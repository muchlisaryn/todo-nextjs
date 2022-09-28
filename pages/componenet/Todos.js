import axios from "axios"
import { useEffect, useState } from "react"

export default function Todos() {

    const [todos, setTodos] = useState([])

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json)
        .then((response) => {
            setTodos(response.data)
        },
        
        [])
    })

    console.log(todos)
    return (
        <div>
           { todos?.map((e) => 
            <div>
            <input className="form-check-input" type="checkbox" value="checked" id="flexCheckIndeterminate" checked={e.completed? "checked" : ""}/>
            <label className="form-check-label ms-4" for="flexCheckIndeterminate">
               {e.title}
            </label>
            </div>
            )}
        </div>
    )
}

    
    