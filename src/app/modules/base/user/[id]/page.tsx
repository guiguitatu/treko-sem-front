import users from '@/app/lib/placeholder-data';
import { Inria_Serif } from 'next/font/google';

export default function UserPage({params}: {params: {id: string}}) {

    const user = users.find((user) => user.id === params.id);


  return (
    <>
      <div className='flex w-full h-[60vh] p-10 items-center justify-center'>
        <form className='flex flex-col gap-4 w-[70vw] bg-[#edf2e1] p-10 rounded-lg shadow-lg'>
        <h1>Alteração de usuário</h1>
            <div className='flex flex-col'>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" defaultValue={user?.name} className='border-2 border-gray-300 rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" defaultValue={user?.email} className='border-2 border-gray-300 rounded-lg p-2' />
            </div>
            <button type="submit" className='bg-green-500 text-white p-2 rounded-lg'>Salvar</button>
        </form>
      </div>
    </>
  );
}