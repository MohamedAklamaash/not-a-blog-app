import type { Metadata } from 'next'
import { Inter,Roboto,Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import AuthContext from '@/context/authContext';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  subsets:["latin"],
  weight:["100","300","400","700"]
})
const poppins = Poppins({
  subsets:["latin"],
  weight:["100","300","500","900"]
})

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Done by Aklamaash',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light`} style={{
        overflowX:"hidden"
      }}
      >
          <AuthContext>
              <Navbar user={user} />
                {children}
              <Footer/>
          </AuthContext>
          </body>
    </html>
  )
}
