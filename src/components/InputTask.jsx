'use client'

import React from 'react'
import CheckTask from './CheckTask';
import { useTheme } from '../context/ThemeContext';

export default function InputTask() {
    const { theme, tasks, setTasks } = useTheme()

    const taskInput = (e) => {
        const task = e.target.value
        if (e.key === "Enter" && task.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, { text: task, checked: false }])
            e.target.value =""
        }
    }
    return (
        <div className={`flex items-center h-14 rounded-md px-3 cursor-pointer ${theme === "light" ? "bg-LTLightGray" : "bg-DTVeryDarkGrayishBlue"}`}>
            <CheckTask />
            <input
                type='text'
                placeholder='Create a new todo...'
                onKeyDown={taskInput}
                className={`w-full ml-2 outline-none cursor-pointer ${theme === "light" ? "bg-LTLightGray" : "bg-DTVeryDarkGrayishBlue"}`} />
        </div>
    )
}