import './Controls.css'

export function Controls(props) {

    const { existEmptyItems, deleteEmptyItems, enableCreation } = props

    return (
        <div className="controls__container">
            <button
                onClick={enableCreation}
            >New Item</button>
            <button
                disabled={!existEmptyItems}
                onClick={deleteEmptyItems}
            >Clear items</button>
        </div>
    )
}