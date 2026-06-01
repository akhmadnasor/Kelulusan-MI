import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { findStudentByNisn } from '../data';

export default function ResultPage() {
  const { nisn } = useParams<{ nisn: string }>();
  const student = findStudentByNisn(nisn || '');

  useEffect(() => {
    if (student) {
      triggerConfetti();
    }
  }, [student]);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  if (!student) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8">
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
        >
          <XCircle size={64} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-6">Maaf, data siswa dengan NISN <strong>{nisn}</strong> tidak ditemukan di sistem kami.</p>
          <Link 
            to="/"
            className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Pencarian
          </Link>
        </motion.section>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Link 
        to="/"
        className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
      >
        <ArrowLeft size={18} className="mr-1" />
        Kembali
      </Link>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8 text-center text-white relative overflow-hidden">
          <GraduationCap size={64} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-1">Selamat!</h3>
          <p className="text-emerald-100 text-lg">Anda dinyatakan LULUS dari MI NU Miftahul Huda IV Tanggul</p>
        </div>

        <div className="p-6 md:p-8">
          <h4 className="font-semibold text-gray-800 mb-4 border-b pb-2 text-lg">Detail Siswa</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base">
            
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Nama Lengkap</span>
              <span className="font-semibold text-gray-900">{student.nama}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Nomor Peserta</span>
              <span className="text-gray-800">{student.nomorPeserta}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">NISN</span>
              <span className="text-gray-800">{student.nisn}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Jenis Kelamin</span>
              <span className="text-gray-800">{student.jenisKelamin === 'L' ? 'Laki-Laki (L)' : 'Perempuan (P)'}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Tempat & Tgl Lahir</span>
              <span className="text-gray-800">{student.tempatLahir}, {student.tanggalLahir}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Kelas</span>
              <span className="text-gray-800">{student.kelas}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Nama Ayah</span>
              <span className="text-gray-800">{student.namaAyah}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-medium tracking-wider mb-1">Nama Ibu</span>
              <span className="text-gray-800">{student.namaIbu}</span>
            </div>

            <div className="flex flex-col md:col-span-2 mt-4 bg-emerald-50 rounded-xl p-4 md:p-6 border border-emerald-100 flex-row items-center justify-between">
              <span className="text-emerald-800 font-medium">Nilai Rata-Rata</span>
              <span className="text-3xl font-bold text-emerald-600">{student.nilaiRataRata}</span>
            </div>

          </div>
        </div>
      </motion.section>
    </div>
  );
}
