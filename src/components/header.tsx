"use client"
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"

const sairaStencil = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin'] 
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.destopBreakpoint}){
        padding: 20px 160px;
    }

    @media (min-width: ${props => props.theme.desktopLargeBreakpoint}){
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${props => props.theme.tabletBreakpoint}){
        font-size: 24px;
    }

    @media (min-width: ${props => props.theme.destopBreakpoint}){
        font-size: 40px;
    }

    @media (min-width: ${props => props.theme.desktopLargeBreakpoint}){
        font-size: 40px;
    }
`

export function Header(){
    const {setSearch, search} = useFilter();

    return (
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon 
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"/>
                <CartControl />
            </div>
        </TagHeader>
    )
}