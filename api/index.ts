import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/health", (c) => {
	return c.json({
		message: "Facets API is running!",
		timestamp: new Date().toISOString(),
	});
});

export default app;
