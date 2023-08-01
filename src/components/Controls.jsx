import './Controls.css'

export function Controls(props) {

    // eslint-disable-next-line react/prop-types
    const { existEmptyItems, deleteEmptyItems } = props

    return (
        <div className="controls__container">
            <button>New Item</button>
            <button
                disabled={!existEmptyItems}
                onClick={deleteEmptyItems}
            >Clear items</button>
        </div>
    )
}