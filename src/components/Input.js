import React from 'react';
import styled from 'styled-components';

function Input({type, name, placeholder, onChange, value, required}) {
    return (
        <InputField value={value} onChange={onChange} required={required} type={type} name={name} placeholder={placeholder}/>
    )
}

const InputField = styled.input`
    outline-color: rgb(242,242,199);
    border: none;
    padding: .5rem 1rem;
    font-family: "Poiret One", cursive;border-radius: 20px;
    width: 80%;
    font-weight: 900;
    letter-spacing: .1rem;
    line-height: 1.5rem;
`

export default Input
