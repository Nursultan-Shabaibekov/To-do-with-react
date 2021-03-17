import React from 'react'
import css from './Todo.module.css'

const TodoList = () => {
    return (
        <div className={css.container}>
            <div>
                <h1 className={css.card}>Let's Go...</h1>
            </div>
            <div>
                <input className={css.block} type="text" placeholder="list must to do"/>
                <input className={css.box} type="date"/>
                <button className={css.btn}>Add</button>
            </div>
        </div>
    )
} 
export{TodoList}