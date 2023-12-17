import {useState} from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        if(count < 100) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount