import React, {FunctionComponent} from 'react';

interface Props {
    id: string;
    value: string;
    handleChange(input: HTMLInputElement): void;
}

const InputCheckbox:FunctionComponent<Props> = ({ id, value, handleChange}) => {
    return (
        <label htmlFor={id} style={{ marginRight: 12 }}>
            <input
                id={id}
                type="checkbox"
                value={value}
                onChange={(event) => handleChange(event.target)}
            />
            {value}
        </label>
    )
}

export default InputCheckbox;
