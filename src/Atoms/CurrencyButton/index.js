import {currencySymbol} from "../../config";

export default function CurrencyButton(props) {
    return (
        <button
            type="button"
            className={(props.activeCurrency === props.currency ? 'active ': '') + "btn btn-outline-info"}
            onClick={() => props.setActiveCurrency(props.currency)}
            dangerouslySetInnerHTML={{__html: currencySymbol[props.currency]}}
        >

        </button>
    )
}