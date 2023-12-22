import styled from "styled-components";
import { SeachIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 10px 16px;
    border: none;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${props => props.theme.destopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }

    @media (min-width: ${props => props.theme.desktopLargeBreakpoint}){
        font-size: 14px;
        line-height: 22px;
        width: 352px;
        height: 42px;
        margin-left: -100px;
        padding: 10px 22px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${props => props.theme.destopBreakpoint}){
        width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput 
                onChange={(event) => props.handleChange(event.target.value)} 
                {...props}
            />
            <SeachIcon />
        </InputContainer>
    )
}