// File: src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} UYIH. All rights reserved.</p>
    </footer>
  );
}