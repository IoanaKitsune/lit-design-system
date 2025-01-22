import {createComponent} from '@lit/react';
import React from 'react';

export function createReactWrapper(tagName: string, elementClass?: any, events?: any) {
    return createComponent({
        react: React,
        tagName,
        elementClass,
        events
    })
}