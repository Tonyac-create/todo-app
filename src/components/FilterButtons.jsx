'use client'

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';


export default function FilterButtons() {
    const { theme, tasks, setFilteredTasks } = useTheme()
    const [activeFilter, setActiveFilter] = useState("all")

    const filterActiveTasks = () => {
        const activeTasks = tasks.filter(task => !task.checked)
        setFilteredTasks(activeTasks)
        setActiveFilter("active")
    }

    const handleList = () => {
        setFilteredTasks(tasks)
        setActiveFilter("all")
    }

    const filterCompletedTasks = () => {
        const completedTasks = tasks.filter(task => task.checked)
        setFilteredTasks(completedTasks)
        setActiveFilter("completed")
    }

    return (
        <div className={`flex justify-evenly gap-4 rounded-md font-semibold mt-3 p-4  md:mt-0 ${theme == "light" ? "bg-LTLightGray" : "bg-DTVeryDarkGrayishBlue"}`}>
            <button
                onClick={handleList}
                className={`${activeFilter === "all" && "text-primaryBrightBlue"}`}
            >
                All
            </button>
            <button
                onClick={filterActiveTasks}
                className={`${activeFilter === "active" && "text-primaryBrightBlue"}`}
            >
                Active
            </button>
            <button
                onClick={filterCompletedTasks}
                className={`${activeFilter === "completed" && "text-primaryBrightBlue"}`}
            >
                Completed
            </button>
        </div>
    )
}
