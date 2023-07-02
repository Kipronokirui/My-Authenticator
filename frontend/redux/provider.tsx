'use client';
import React from "react";
import { makeStore } from "./store";
import { Provider } from "react-redux";

interface Props{
    children:React.ReactNode
}

export default function CutomProvider({ children }: Props) {
    return <Provider store={makeStore()}>{children} </Provider>
}