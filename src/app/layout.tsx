import type { Metadata } from 'next';
import { Alegreya, Jost } from 'next/font/google';
import './globals.css';
import Footer from '@/components/custom/footer/Footer';
import { Toaster } from 'react-hot-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ContactForm from '@/components/custom/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Imperial Design',
  description: 'Дизайн проєкти в Києві та Україні',
};

const headingsFont = Alegreya({
  subsets: ['latin'],
  variable: '--font-headings',
});

const bodyFont = Jost({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingsFont.variable} ${bodyFont.variable} font-body text-slate-700`}
      >
        <Dialog>
          <Toaster position="top-center" />
          <DialogContent className="max-w-full max-h-full w-[95%] lg:w-4/5 h-4/5 flex items-center justify-center">
            <div className="w-full max-w-96 lg:max-w-[600px]">
              <h2 className="font-heading text-xl mb-4">
                Просто заповніть форму, і ми зв&apos;яжемося з вами якомога
                швидше
              </h2>
              <ContactForm />
            </div>
          </DialogContent>
          {children}
          <Footer />
        </Dialog>
      </body>
    </html>
  );
}
