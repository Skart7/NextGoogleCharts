import Document, {Main, Head, Html, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
    static async getInitialProps(ctx:DocumentContext):Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()  
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            enhanceComponent: (Component) => Component,
            })
    
            const initialProps = await Document.getInitialProps(ctx)
        
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                )
            }
        } finally {
            sheet.seal()
        }
  
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
          </Head>
          <body>
            <Main />
            <div id="__portal"></div>
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument