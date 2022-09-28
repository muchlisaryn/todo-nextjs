export default function Todos(props) {
    return (
        <div>
           { props.todos?.map((e) => 
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

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()

    return {
        props: { todos }
    }
}

    
    