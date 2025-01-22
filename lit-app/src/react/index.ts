import {createReactWrapper} from "./createReactWrapper.ts";
import {Button} from "../components/button.ts";

export const LitButton = createReactWrapper('lit-button', Button, {
    onclick: 'onClick'
});
