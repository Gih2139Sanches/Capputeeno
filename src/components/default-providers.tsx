"use client"
import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DeafultProvidersProps{
    children: ReactNode
}

const theme = {
    desktopLargeBreakpoint: "1440px",
    desktopBreakpoint: "968px",
    tabletBreakpoint: "768px",
}

export function DefaultProviders({children}: DeafultProvidersProps){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}