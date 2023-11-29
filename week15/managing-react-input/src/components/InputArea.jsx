/* eslint-disable react/prop-types */
export function InputArea(props) {
    return (
        <div className="inputWrapper">
            <input onChange={(e) => props.handleChangeText(e.target.value)} type="text" value={props.text} />
            <select onChange={(e) => props.handleChangeColor(e.target.value)} value={props.selected}>
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
                <option value="#0000ff">Blue</option>
            </select>
        </div>
    );
}