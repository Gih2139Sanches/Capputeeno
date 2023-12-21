import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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
const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

export function CartControl(){
    const router = useRouter()
    const {value} = useLocalStorage('cart-items', [])

    const handleNavigateTocart = () => {
        router.push("/cart")
    }

    return(
        <Container onClick={handleNavigateTocart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}