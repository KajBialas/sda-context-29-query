import { useState } from "react";
import { API } from "../api/constants";
import { useMutation, useQueryClient } from "react-query";


// Zadanie 2:
// Wdrozenie dodawania do API nowych todo
// Wdrozenie server-json w obrebie obslugi todo

const addTodo = async (newTodo) => {
    const response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
};

const AddTodo = () => {
    const queryClient = useQueryClient();

    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });

    const [ inputNameTodo, setInputNameTodo ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTodoMutation.mutate({
            title: inputNameTodo,
            completed: false
        });
        setInputNameTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Todo name" value={inputNameTodo} onChange={e => setInputNameTodo(e.target.value)} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo;