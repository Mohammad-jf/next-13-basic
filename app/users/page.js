import Link from "next/link";

const Users = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    
    return (
        <div>{data.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
                <h1>{user.name}</h1>
            </Link>
        ))}</div>
    )
}

export default Users