// Modern List Component
function DaftarMahasiswa({ data, onEdit, onDelete, searchTerm, onSearch }) {
  const filteredData = data.filter(mhs => 
    mhs.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mhs.nim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
      <div className="p-6 border-b border-gray-200/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Daftar Mahasiswa
          </h2>
          <div className="text-sm text-gray-500 bg-gray-100/50 px-3 py-1 rounded-full">
            {filteredData.length} mahasiswa
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama atau NIM..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
          />
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {filteredData.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-medium">Tidak ada data mahasiswa</p>
            <p className="text-sm">Silakan tambahkan mahasiswa baru</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200/50">
            {filteredData.map((mhs, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {mhs.nama.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{mhs.nama}</h3>
                      <p className="text-gray-500 text-sm">{mhs.nim}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => onEdit(index)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(index)}
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

