import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body 
        className='
          font-barlow
          bg-cover
          bg-gradient-to-b from-bluish to-purplish bg-no-repeat bg-fixed
        '
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}