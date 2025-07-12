export const metadata = {
  title: 'alpha',
  description: 'auto parts link search engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
