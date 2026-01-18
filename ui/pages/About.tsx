import { Link } from "react-router";

export function About() {
	return (
		<div className="max-w-3xl mx-auto p-8 text-center">
			<h1 className="text-4xl font-bold mb-4">About Facets</h1>
			<p className="text-lg opacity-80">
				Facets is a professional finance tracker SaaS application. It supports
				multi-tenant user accounts with features like transaction tracking,
				accounts management, debts, loans, goals, and scheduled payments.
			</p>

			<nav className="my-6 space-x-4">
				<Link to="/" className="text-primary hover:text-primary-hover font-medium">
					Home
				</Link>
				<span className="opacity-50">|</span>
				<Link to="/about" className="text-primary hover:text-primary-hover font-medium">
					About
				</Link>
			</nav>

			<div className="mt-8 p-6 bg-white/5 rounded-lg text-left">
				<h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
				<ul className="space-y-2 list-disc list-inside">
					<li>
						<strong>Frontend:</strong> React 19 + Vite + TanStack Query + React Router
					</li>
					<li>
						<strong>Backend:</strong> Hono + Cloudflare Workers + D1 + Drizzle ORM
					</li>
					<li>
						<strong>Styling:</strong> Tailwind CSS 4 + shadcn/ui
					</li>
				</ul>
			</div>
		</div>
	);
}
