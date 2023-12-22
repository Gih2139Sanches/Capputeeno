"use client"
import { DefaultPageLayout } from "@/components/default-page-layout";
import { CircleCheck } from "@/components/icons/circle-check";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: calc(100% - 90%);
`

const FinishContainer = styled.div`
    width: 580px;
    height: 470px;
    background: var(--white);
    border-radius: 8px;

`
const Finish = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    margin-top: 55px;
    
    h2{
        font-size: 30px;
        border-bottom: 2px solid var(--success-color);
    }

    div{
        margin-top: 20px;
        p{
            text-align: center;
            line-height: 30px;
        }
    }

    button{
        border: none;
        border-radius: 8px;
        background: var(--success-color);
        padding: 12px 20px;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--white);
        cursor: pointer;

        margin-top: 20px;

        &:hover{
            background: #3c893d;
        }
    }
`


export default function FinishPage(){
    const router = useRouter()

    const handleNavigateToHome = () => {
        router.push("/")
    }

    return (
        <DefaultPageLayout>
            <Container>
                <FinishContainer>
                    <Finish>
                        <CircleCheck />
                        <h2>Compra Finalizada!</h2>
                        <div>
                            <p>Sua compra foi finalizada e sairá para a entrega.</p>
                            <p>Seu carrinho de compras ficou vazio : (</p>
                            <p>Para continuar comprando clique no botão abaixo.</p>
                        </div>
                        <button onClick={handleNavigateToHome}>Clique aqui</button>
                    </Finish>
                </FinishContainer>
            </Container>
        </DefaultPageLayout>
    )
}