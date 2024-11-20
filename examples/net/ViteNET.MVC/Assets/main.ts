/**
 * Name: main.ts
 * Description: This is the main entry point for the app.
 */

import 'vite/modulepreload-polyfill';
import { setupCounter } from './counter';
import './style.scss';
import * as signalR from '@microsoft/signalr';

class Test {
    public constructor() {
        setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
        const connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
        console.log(connection);
    }
}
const testObj = new Test();
