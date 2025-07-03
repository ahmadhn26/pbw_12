import { User, Edit3, Users, GraduationCap, BookOpen } from "lucide-react";

function DaftarMahasiswa({ data, onEdit }) {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-600 mb-2">Belum ada data mahasiswa</h3>
        <p className="text-gray-500">Tambahkan mahasiswa pertama untuk memulai</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <div className="flex items-center gap-3 text-white">
          <Users className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Daftar Mahasiswa</h2>
          <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {data.length} mahasiswa
          </span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {data.map((mhs, index) => (
          <div
            key={index}
            className="p-6 hover:bg-gray-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{mhs.nama}</h3>
                  <p className="text-gray-500 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {mhs.nim}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => onEdit(index)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  title="Edit mahasiswa"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaftarMahasiswa;
