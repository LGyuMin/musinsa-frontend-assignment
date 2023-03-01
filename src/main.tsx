import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import App from './App'
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyle/>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
)
