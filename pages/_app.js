import appConfig from '../config.json';

function GlobalStyle () {
    return (
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }
            body {
                font-family: 'Open Sans', sans-serif;
            }

            .github-link {
                text-decoration: none;
                color: ${appConfig.theme.colors.neutrals['300']}
            }

            /* App fit Height */ 
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
            /* ./App fit Height */ 

            @keyframes animatedBackground {
                0% { background-position: 0 0; }
                50% { background-position: -300px 0; }
                100% { background-position: 0 0; }
            }
            @-moz-keyframes animatedBackground {
                0% { background-position: 0 0; }
                50% { background-position: -300px 0; }
                100% { background-position: 0 0; }
            }
            @-webkit-keyframes animatedBackground {
                0% { background-position: 0 0; }
                50% { background-position: -300px 0; }
                100% { background-position: 0 0; }
            }
            @-ms-keyframes animatedBackground {
                0% { background-position: 0 0; }
                50% { background-position: -300px 0; }
                100% { background-position: 0 0; }
            }
            @-o-keyframes animatedBackground {
                0% { background-position: 0 0; }
                50% { background-position: -300px 0; }
                100% { background-position: 0 0; }
            }
        `}</style>
    )
}

export default function MyApp ({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}