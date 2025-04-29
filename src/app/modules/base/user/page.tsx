import users from '@/app/lib/placeholder-data';

export default function usersPage() {  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">Usuários registrados no Sistema</h1>
      <table className="[&_tr]:border-b sticky top-0 z-10">
        <thead>
          <tr className='hover:bg-muted/50 border-b '>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td className="border border-gray-300 px-4 py-2 w-[10%] md:text-sm lg:text-base text-xs">{users.id}</td>
              <td className="border border-gray-300 px-4 py-2 w-[20%] md:text-sm lg:text-base text-xs">{users.name}</td>
              <td className="border border-gray-300 px-4 py-2 xl:w-[40%] w-[30%] md:text-sm lg:text-base text-xs">{users.email}</td>
              <td className="flex border border-gray-200 px-4 py-2 md:text-sm text-xs justify-center"><a href={`user/${users.id}`}><button className="bg-[var(--paleta3)] p-2 rounded-[10] m-2" >Alterar users</button></a><a><button className="bg-[#ff4040] p-2 rounded-[10] m-2">Delete users</button></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}