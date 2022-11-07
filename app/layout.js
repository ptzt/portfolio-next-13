import '../styles/globals.css'

import Navigation from "../components/Navigation"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <title>ptzt dev</title>
      <body>
        <Navigation />
        {children}
      </body>
      <footer>
        <h1>Tomas Millan</h1>
        <p>Developer • {new Date().getFullYear()}</p>
      </footer>
    </html>
  )
}
