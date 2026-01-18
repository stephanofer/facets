import { useState } from "react";
import { Link } from "react-router";

interface ApiResponse {
	message: string;
	timestamp: string;
}

export function Home() {
	const [apiData, setApiData] = useState<ApiResponse | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/health");
			const data = (await res.json()) as ApiResponse;
			setApiData(data);
		} catch (error) {
			console.error("Failed to fetch:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-3xl mx-auto p-8 text-center">
			<h1 className="text-4xl font-bold mb-2">Facets</h1>
			<p className="text-lg opacity-80">Professional Finance Tracker</p>

			<nav className="my-6 space-x-4">
				<Link to="/" className="text-primary hover:text-primary-hover font-medium">
					Home
				</Link>
				<span className="opacity-50">|</span>
				<Link to="/about" className="text-primary hover:text-primary-hover font-medium">
					About
				</Link>
			</nav>

			<div className="mt-8 p-6 bg-white/5 rounded-lg">
				<button
					onClick={fetchData}
					disabled={loading}
					className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
				>
					{loading ? "Loading..." : "Test API Connection"}
				</button>

				{apiData && (
					<div className="mt-4 p-4 bg-primary/10 rounded text-left">
						<p>
							<strong>Message:</strong> {apiData.message}
						</p>
						<p>
							<strong>Timestamp:</strong> {apiData.timestamp}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
