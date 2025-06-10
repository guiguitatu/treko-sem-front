"use client"
import { redirect } from "next/navigation";
import { AnimatedBg } from "@/components/DotMatrix";
import { useState } from "react";

export default function Home() {
  // TODO: fazer uma landing page de vdd
  /*   redirect('/modules/auth/login') */
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <>
      <AnimatedBg />
      <div className="p-6">
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 py-16 text-center">

            <h1 className="text-5xl text-center font-bold text-gray-800 mb-6">Treko</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <button className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all"
                onClick={() => {
                  redirect("/modules/auth/register")
                }}
              >
                Cadastre-se para doar
              </button>
              <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                onClick={() => {
                  redirect("/modules/auth/login")
                }}
              >

                Faça login
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="p-6 rounded-lg bg-white shadow-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rápido e eficiente</h3>
                <p className="text-gray-600">Suas doações chegam mais rápido a quem precisa</p>
              </div>

              <div className="p-6 rounded-lg bg-white shadow-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparência total</h3>
                <p className="text-gray-600">Acompanhe o caminho das suas doações até o destino final</p>
              </div>

              <div className="p-6 rounded-lg bg-white shadow-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Impacto social</h3>
                <p className="text-gray-600">Veja como suas doações estão transformando vidas na sua comunidade</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Campanha de Inverno 2025</h2>
              <p className="text-white text-xl mb-6">Ajude-nos a levar agasalhos para famílias em situação de vulnerabilidade.</p>
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 animate-[scale_0.5s_ease-in-out]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 animate-[bounce_0.5s_ease-in-out]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-medium">Email enviado com sucesso!</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <input
                    type="email"
                    placeholder="Seu email para contato"
                    className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                    onClick={() => {
                      if (email) {
                        setFormSubmitted(true);
                        // Here you would normally send the email to your backend
                      }
                    }}
                  >
                    Participar da campanha
                  </button>
                </div>
              )}
            </div>

            <footer className="text-gray-600">
              <p>© {new Date().getFullYear()} Treko. Todos os direitos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
