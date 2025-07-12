export const metadata = {
  title: 'alpha',
  description: 'auto parts multi-site search engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
