import React from 'react'

export const Footer: React.FC<Props> = ({ todos, onCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
            </span>
            <Filters
                filterSelected={}
                onFilterChange={()=>{}}
            />
        </footer>
    )
}
