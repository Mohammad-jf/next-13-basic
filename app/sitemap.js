export default async function sitemap() {
    const staticRoutes = ['', '/users'];
    const routes = staticRoutes.map((route) => ({
        url: `http://localhost:3000${route}`,
        lastModified: new Date().toString()
    })
    );

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const dynamicRoutes = data.map((user) => ({
        url: `http://localhost:3000/users/${user.id}`,
        lastModified: new Date().toString()
    }))

    return [...routes, ...dynamicRoutes]
}