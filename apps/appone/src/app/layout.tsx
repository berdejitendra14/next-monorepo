import './global.css';

export const metadata = {
  title: 'Welcome to AppOne',
  description: 'Generated by create-nx-workspace',
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
    </head>
      <body>{children}</body>
    </html>
  );
}
