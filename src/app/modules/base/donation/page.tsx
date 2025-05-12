// src/app/modules/base/donation/page.tsx

import React from "react";
import campains from "@/lib/campains.js";

export default function DonationsPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-2xl font-bold mb-4">Doações</h1>

        <div className="grid grid-cols-4 gap-4">
          {campains.map((c) => {
            // 1) Calcula o percentual de progresso
            const progress = Math.round((c.current_value / c.goal) * 100);

            return (
              <a
                key={c.id}
                href={`donation/${c.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <h2 className="text-lg font-semibold">
                    {c.campain_name}
                  </h2>
                  <p className="text-gray-600 mb-2">{c.description}</p>

                  {/* 2) Barra de progresso */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    {progress}% arrecadado
                  </p>

                  {/* 3) Label de expiração */}
                  {new Date(c.end_date) < new Date() ? (
                    <span className="text-red-500 font-bold mt-2 block">
                      Expirada em {c.end_date}
                    </span>
                  ) : (
                    <span className="text-green-600 font-medium mt-2 block">
                      Termina em {c.end_date}
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
