import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prayer Connect - Share and Pray Together',
  description: 'A community platform for sharing prayer requests and praying together',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-prayer-600">🙏</div>
                <h1 className="text-2xl font-bold text-gray-900">Prayer Connect</h1>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-prayer-600 transition">Home</button>
                <button className="text-gray-600 hover:text-prayer-600 transition">Requests</button>
                <button className="text-gray-600 hover:text-prayer-600 transition">Sign In</button>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 Prayer Connect. Sharing faith, supporting each other in prayer.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
