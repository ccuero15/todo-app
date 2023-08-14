import { type Todos as TodoTypes } from "../type"

type Props = TodoTypes;
export const Todo: React.FC<Props> = ({ id, title, completed }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => []}

            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { }} />
        </div>
    )
}