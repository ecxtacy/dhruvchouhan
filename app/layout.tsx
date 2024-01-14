import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='py-8'>
        {children}
      </body>
    </html>
  )
}
