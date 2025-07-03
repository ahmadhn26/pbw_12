function DaftarMahasiswa({ data, onEdit }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-teal-900 mb-4">Daftar Mahasiswa</h2>
      {data.length === 0 ? (
        <p className="text-teal-600 italic text-center py-6 bg-teal-50 rounded-lg">
          Belum ada data mahasiswa.
        </p>
      ) : (
        <ul className="space-y-4">
          {data.map((mhs, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl shadow-sm hover:shadow-xl hover:bg-gradient-to-r hover:from-teal-100 hover:to-blue-100 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-teal-900 font-semibold">{mhs.nama}</span>
                  <span className="text-blue-600 text-sm">{mhs.nim}</span>
                </div>
              </div>
              <button
                onClick={() => onEdit(index)}
                className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center space-x-1 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span>Edit</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DaftarMahasiswa;