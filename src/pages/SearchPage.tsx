import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError('Masukkan NISN terlebih dahulu');
      return;
    }
    navigate(`/result/${searchQuery.trim()}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8">
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Pengumuman Kelulusan</h2>
          <p className="text-gray-500 mt-1">Silakan cari data kelulusan kelas 6 menggunakan NISN</p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Masukkan NISN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Search size={20} className="mr-2" />
            Cari Data
          </button>
        </form>
        {error && (
          <p className="text-red-500 mt-3 text-center md:text-left text-sm">{error}</p>
        )}
      </section>
    </div>
  );
}
