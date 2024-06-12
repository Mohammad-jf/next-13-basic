 export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
  return data.map((item) => ({
    userId: String(item.id),
  }))               
}

const UserDetails = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json();
  return (
    <div>
        <h1>{data.name}</h1>
        <h2>{data.id}</h2>
    </div>
  )
}

export default UserDetails