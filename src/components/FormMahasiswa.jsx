function FormMahasiswa({ form, onChange, onSubmit, isEdit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-8 bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-bold text-teal-900 mb-5">
        {isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
      </h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-teal-800 mb-2">
            Nama
          </label>
          <div className="relative">
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Masukkan nama"
              value={form.nama}
              onChange={onChange}
              className="w-full p-3 pl-10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white transition-all duration-200"
              required
            />
            <svg
              className="w-5 h-5 text-teal-500 absolute left-3 top-1/2 transform -translate-y-1/2"
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
          </div>
        </div>
        <div>
          <label htmlFor="nim" className="block text-sm font-medium text-teal-800 mb-2">
            NIM
          </label>
          <div className="relative">
            <input
              type="text"
              name="nim"
              id="nim"
              placeholder="Masukkan NIM"
              value={form.nim}
              onChange={onChange}
              className="w-full p-3 pl-10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white transition-all duration-200"
              required
            />
            <svg
              className="w-5 h-5 text-teal-500 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.5 3.5 0 00-2.025-.625"
              />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
        >
          {isEdit ? "Update" : "Tambah"}
        </button>
      </div>
    </form>
  );
}

export default FormMahasiswa;