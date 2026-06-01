import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { School, MapPin } from 'lucide-react';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        {/* Header Panel */}
        <header className="w-full bg-emerald-700 text-white shadow-md flex-shrink-0">
          <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <School size={48} className="text-emerald-200" />
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                MI NU MIFTAHUL HUDA IV TANGGUL
              </h1>
              <p className="text-emerald-100 flex flex-col md:flex-row items-center mt-1 text-sm md:text-base">
                <MapPin size={16} className="md:mr-1 mb-1 md:mb-0 inline" />
                Dusun Tanggul Desa Baujeng Kec. Beji Kab. Pasuruan
              </p>
            </div>
          </div>
        </header>

        <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/result/:nisn" element={<ResultPage />} />
          </Routes>
        </main>

        <footer className="w-full text-center py-6 text-gray-500 text-sm flex-shrink-0">
          &copy; {new Date().getFullYear()} MI NU Miftahul Huda IV Tanggul. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}
