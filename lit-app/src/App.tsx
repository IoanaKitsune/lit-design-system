import './App.css'
import './components/button'
import * as React from 'react'
import {provideNovaDesignSystem} from "./design-system/design-system.ts";
import {useEffect} from "react";
import {LitButton} from "./react";

function App() {

        provideNovaDesignSystem({
            theme: 'nova',
            themeMode: 'light',
            htmlFontSize: 16,
            root: document,
        });

    return (
        <>
            Hello, world
            <lit-button></lit-button>
            <LitButton></LitButton>
        </>
    )
}

export default App
