export interface Student {
  no: number;
  nomorPeserta: string;
  nisn: string;
  nama: string;
  jenisKelamin: string;
  tempatLahir: string;
  tanggalLahir: string;
  kelas: string;
  namaAyah: string;
  namaIbu: string;
  nilaiRataRata: number;
  status: string;
}

export const students: Student[] = [
  { no: 1, nomorPeserta: '26-13-09-1-0148-0001', nisn: '0131359670', nama: 'ANANDA PUTRI NUR SHOLIKHAH', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '10-12-2013', kelas: '6', namaAyah: 'MARIYONO', namaIbu: 'SOLIHA', nilaiRataRata: 91, status: 'LULUS' },
  { no: 2, nomorPeserta: '26-13-09-1-0148-0002', nisn: '0131056919', nama: 'BILQIS FAIHA RIFDA', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '24-10-2013', kelas: '6', namaAyah: 'FANDI MARIYANTO', namaIbu: 'RUSTIAWATI', nilaiRataRata: 91, status: 'LULUS' },
  { no: 3, nomorPeserta: '26-13-09-1-0148-0003', nisn: '0134346756', nama: 'FAHRIL ADZIM', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '07-11-2013', kelas: '6', namaAyah: 'MUHLISIN', namaIbu: 'ANITA WIDY ASTUTIK', nilaiRataRata: 85, status: 'LULUS' },
  { no: 4, nomorPeserta: '26-13-09-1-0148-0004', nisn: '0147369649', nama: 'HAMDAN ALI AKBAR', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '03-03-2014', kelas: '6', namaAyah: 'KHOIRUL ANAM', namaIbu: 'LAILIL MAULUDIYAH', nilaiRataRata: 90, status: 'LULUS' },
  { no: 5, nomorPeserta: '26-13-09-1-0148-0005', nisn: '0147021410', nama: 'LAYYINATUZ ZAHRAH ILMIYAH', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '21-02-2014', kelas: '6', namaAyah: 'MUHAMMAD FIRMAN TRIAN', namaIbu: 'ILMIATUS SAKDIYAH', nilaiRataRata: 88, status: 'LULUS' },
  { no: 6, nomorPeserta: '26-13-09-1-0148-0006', nisn: '0143136301', nama: 'MEISYA SALSABILA', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '09-06-2014', kelas: '6', namaAyah: 'ABD.MUIN', namaIbu: 'KHAMIDAH', nilaiRataRata: 89, status: 'LULUS' },
  { no: 7, nomorPeserta: '26-13-09-1-0148-0007', nisn: '0131898468', nama: 'MOCHAMMAD ANDIKA FRANCISKO PUTRA', jenisKelamin: 'L', tempatLahir: 'SIDOARJO', tanggalLahir: '26-09-2013', kelas: '6', namaAyah: 'KAMAN', namaIbu: 'YUNARTI', nilaiRataRata: 86, status: 'LULUS' },
  { no: 8, nomorPeserta: '26-13-09-1-0148-0008', nisn: '0131145453', nama: 'MUHAMMAD AL FATIH', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '30-11-2013', kelas: '6', namaAyah: 'AKHMAD NASOR', namaIbu: 'SITI ZULAIKHA', nilaiRataRata: 91, status: 'LULUS' },
  { no: 9, nomorPeserta: '26-13-09-1-0148-0009', nisn: '0148718411', nama: 'MUMTAZ KHURIN`IN', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '21-01-2014', kelas: '6', namaAyah: 'GHOZALI', namaIbu: 'DEWI WARDAH', nilaiRataRata: 91, status: 'LULUS' },
  { no: 10, nomorPeserta: '26-13-09-1-0148-0010', nisn: '0147657606', nama: 'NADIA AZZAHRA FAUZI', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '15-05-2014', kelas: '6', namaAyah: 'RUSTAMI FAUZI', namaIbu: 'ETI WIJAYANTI', nilaiRataRata: 92, status: 'LULUS' },
  { no: 11, nomorPeserta: '26-13-09-1-0148-0011', nisn: '0145725330', nama: 'NINO CHAIDAR AL-FARISI', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '28-05-2014', kelas: '6', namaAyah: 'MIRZA CHAIDAR ACHMAD', namaIbu: 'DEWI YULIATI NINGSIH', nilaiRataRata: 87, status: 'LULUS' },
  { no: 12, nomorPeserta: '26-13-09-1-0148-0012', nisn: '0137028380', nama: 'NUR ZAKIYAH RAMADHANI', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '24-07-2013', kelas: '6', namaAyah: 'DUL ROCHIM', namaIbu: 'CHUDRIAH', nilaiRataRata: 91, status: 'LULUS' },
  { no: 13, nomorPeserta: '26-13-09-1-0148-0013', nisn: '0133079516', nama: 'RIZKI AINUROFIK', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '17-10-2013', kelas: '6', namaAyah: 'SUTIKNO', namaIbu: 'SOLIKHA', nilaiRataRata: 90, status: 'LULUS' },
  { no: 14, nomorPeserta: '26-13-09-1-0148-0014', nisn: '0144068853', nama: 'SALSABILA ANASTASYA', jenisKelamin: 'P', tempatLahir: 'PASURUAN', tanggalLahir: '07-01-2014', kelas: '6', namaAyah: 'RIKI HERMANSA', namaIbu: 'NUR LIAWATI', nilaiRataRata: 89, status: 'LULUS' },
  { no: 15, nomorPeserta: '26-13-09-1-0148-0015', nisn: '0138227440', nama: 'YUSRIL ALFHATAN', jenisKelamin: 'L', tempatLahir: 'PASURUAN', tanggalLahir: '25-12-2013', kelas: '6', namaAyah: 'SAMSUL BAKRI', namaIbu: 'ISTIFAIYAH', nilaiRataRata: 88, status: 'LULUS' }
];

export const findStudentByNisn = (nisn: string): Student | undefined => {
  return students.find(s => s.nisn === nisn);
};
