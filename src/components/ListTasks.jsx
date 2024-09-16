'use client'

import React from 'react'
import CheckTask from './CheckTask'
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import FilterButtons from './FilterButtons';

export default function ListTasks() {
    const { theme, tasks, setTasks, filteredTasks } = useTheme()

    const handleCheckTask = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            return i === index ? { ...task, checked: !task.checked } : task
        })
        setTasks(updatedTasks)
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <ul className={`rounded-md mt-5 ${theme === "light" ? "bg-LTLightGray" : "bg-DTVeryDarkGrayishBlue"}`}>
            {filteredTasks.map((task, index) => (

                <li key={index} className='flex items-center gap-2 w-full h-20 p-3 border-b-2 border-LTLightGrayishBlue'>
                    <CheckTask checked={task.checked} onCheck={() => handleCheckTask(index)} />
                    <p className={`font-bold ${task.checked && "line-through"}`}>
                        {task.text}
                    </p>
                    <Image
                        src="/icon-cross.svg"
                        width={15}
                        height={15}
                        alt="Delete task"
                        className='ml-auto cursor-pointer'
                        onClick={() => deleteTask(index)}
                    />
                </li>
            ))}
            <div className='flex justify-between items-center p-3 text-LTLightGrayishBlue'>
                <p>{filteredTasks.length} items left</p>
                <div className="hidden md:flex">
                    <FilterButtons />
                </div>
                <button onClick={() => setTasks(tasks.filter(task => !task.checked))}>Clear completed</button>
            </div>
        </ul>
    )
}
