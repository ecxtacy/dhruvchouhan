import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='py-8 bg-cover bg-fixed bg-[url("/assets/light_bg.png")] dark:bg-[url("/assets/dark_bg.jpg")] dark:text-slate-50'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
