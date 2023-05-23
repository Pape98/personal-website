import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '@/config/theme';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
                        rel='stylesheet'
                    />
                    <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.typekit.net/vaq7nkg.css" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}