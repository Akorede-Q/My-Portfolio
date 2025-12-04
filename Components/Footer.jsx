export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-6 flex items-center justify-between">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Legit. Built with Next.js</div>
        <div className="text-sm space-x-4">
          <a href="#" className="hover:text-primary">GitHub</a>
          <a href="#" className="hover:text-primary">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
