import './Controls.css'

export function Controls(props) {

    const { existEmptyItems, deleteEmptyItems, enableCreation, onsSitchCreationMode } = props

    return (
        <div className="controls__container">
            <button
                onClick={onsSitchCreationMode}
                disabled={enableCreation}
            >New item</button>
            <button
                disabled={!existEmptyItems}
                onClick={deleteEmptyItems}
            >Clear items</button>
        </div>
    )
}