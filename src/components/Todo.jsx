import { useQuery  } from "react-query";
import { API } from "../api/constants";

export const fetchTodo = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const Todo = () => {
    const { data, isLoading, isError } = useQuery('todos', fetchTodo, {
        staleTime: Infinity,
    });

    if (isLoading) {
        return (<div>Loading</div>);
    }

    if (isError) {
        return (<div>Error</div>);
    }

    return (
        <div>
            {data.map(todoElement => <div key={todoElement.id}>{todoElement.title}</div>)}
        </div>
    )
}

export default Todo;