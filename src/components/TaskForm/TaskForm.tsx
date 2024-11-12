import { useState } from 'react';
import styles from './TaskForm.module.css';
import { PlusCircle } from 'lucide-react';

interface TaskFormProps {
    onSubmit: (task: { task: string }) => void;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
    const [newTask, setNewTask] = useState('');


    function handleNewTask(event: React.FormEvent) {
        event.preventDefault();
        if(newTask === '') { 
            (event.target as HTMLFormElement).querySelector('input')!.setCustomValidity('Digite uma tarefa'); 
        } else onSubmit({ task: newTask });
        setNewTask('');
    }

    function handleSetTask(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    return (
        <form className={styles.form} onSubmit={handleNewTask}>
            <input className={styles.input} value={newTask} onChange={handleSetTask} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.send} type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}