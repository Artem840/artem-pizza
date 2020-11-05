import React, {FunctionComponent} from 'react';

interface Props {
    id: string;
    value: string;
    group: string;
    label: string;
    isSelected: boolean;
    handleChange(input: HTMLInputElement): void;
}

const InputRadio:FunctionComponent<Props> = ({ id, value, group, label, isSelected, handleChange}) => {
    return (
        <label htmlFor={id} style={{ marginRight: 12 }}>
            <input
                id={id}
                type="radio"
                value={value}
                name={group}
                checked={isSelected}
                onChange={(event) => handleChange(event.target)}
            />
            {label}
        </label>
    )
}

export default InputRadio;
