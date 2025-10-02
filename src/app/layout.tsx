// src/app/layout.tsx
import Link from 'next/link';
import './globals.css'; // Importa o CSS global

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/">Início (Importância)</Link>
            <Link href="/noticias">Notícias e Info</Link>
            <Link href="/calendario">Calendário</Link>
            <Link href="/mitos-e-verdades">Mitos e Verdades</Link>
          </nav>
        </header>
        
        <main className="container">
          {children}
        </main>

        <footer style={{ textAlign: 'center', padding: '15px', marginTop: '40px', borderTop: '1px solid #ddd', backgroundColor: 'white' }}>
          &copy; {new Date().getFullYear()} Campanha de Vacinação.
        </footer>
      </body>
    </html>
  );
}