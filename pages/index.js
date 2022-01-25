
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
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

function Title (props) {
    const Tag = props.tag || 'h1'
    const content = props.children

    return (
        <>
            <Tag>{content}</Tag>

            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}

export default function PaginaInicial () {
    const username = 'simonardejr';

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                    },
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url("/assets/img/peakpx2.jpg")',
                    backgroundRepeat: 'no-repeat', backgroundSize: '2778px 1284px', backgroundPosition: '0px 0px', animation: 'animatedBackground 30s linear infinite', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
                <Box styleSheet={{
                    color: appConfig.theme.colors.neutrals[200],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: '10px',
                    borderRadius: '1000px'
                }}><a href="https://github.com/simonardejr" class="github-link">💚 Simonarde Lima</a></Box>
            </Box>
        </>
    );
}