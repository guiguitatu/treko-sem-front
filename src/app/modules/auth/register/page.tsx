"use client";

import Image from 'next/image';
import Button from '../../../../components/Button';

export default function LoginPage() {
  const handleLogin = () => {
    console.log('Login clicado!');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row @max-lg:bg-image bg-cover bg-no-repeat bg-center">
      <div className="flex lg:invisible flex-1 bg-gray-200 relative static">
        <Image
          src="/academic-donations.png"
          alt="Imagem de login"
          width={862}
          height={862}
          className="object-cover w-full h-screen brightness-75"
          />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#00000000] lg:bg-[#E3EAD5] h-screen w-screen lg:w-1/2 absolute">
        <div className="w-full max-w-md bg-gray-50 p-10 rounded-[25px] ">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                className="mt-1 w-full p-3 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="mt-1 w-full p-3 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <Button
              text="Entrar"
              variant="primary"
              onClick={handleLogin}
            />
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="/modules/base/dashboard" className="text-blue-600 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
      <div className="hidden lg:block flex-1 bg-gray-200">
        <Image
          src="/academic-donations.png"
          alt="Imagem de login"
          width={862}
          height={862}
          className="object-cover w-full h-full brightness-75"
        />
      </div>
    </div>
  );
}