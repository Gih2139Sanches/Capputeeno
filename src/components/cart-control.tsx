import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0px 5px;
    margin-left: -10px;
    font-size: 10px;
  
    background: var(--delete-color);
    color: var(--white);
`
const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const {value} = useLocalStorage('cart-items')


    return(
        <Container>
            <CartIcon />
            {value.legth && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}