export default function sitemap() {
    const staticRoutes = ['', '/users'];
    const routes = staticRoutes.map((route) => ({
        url: `http://localhost:3000${route}`,
        lastModified: new Date().toString()
    })
    );
    return [...routes]
}