export default function UnitButton(props) {
    return (
        <button
            type="button"
            className={(props.activeUnit === props.unit ? 'active ': '') + "btn btn-outline-warning"}
            onClick={() => props.setActiveUnit(props.unit)}
        >
            {props.unit}
        </button>
    )
}