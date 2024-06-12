import Link from "next/link";

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
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