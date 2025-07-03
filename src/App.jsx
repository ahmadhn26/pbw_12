import { useState } from "react";
import { GraduationCap } from "lucide-react";
import FormMahasiswa from "./components/FormMahasiswa";
import DaftarMahasiswa from "./components/DaftarMahasiswa";

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [form, setForm] = useState({ nama: "", nim: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (form.nama && form.nim) {
      if (editIndex !== null) {
        const data = [...mahasiswa];
        data[editIndex] = form;
        setMahasiswa(data);
        setEditIndex(null);
      } else {
        setMahasiswa([...mahasiswa, form]);
      }
      setForm({ nama: "", nim: "" });
    }
  };

  const handleEdit = (index) => {
    setForm(mahasiswa[index]);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setForm({ nama: "", nim: "" });
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl inline-block mb-4">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Sistem Manajemen Mahasiswa
          </h1>
          <p className="text-gray-600">Kelola data mahasiswa dengan mudah dan efisien</p>
        </div>
        
        <FormMahasiswa
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isEdit={editIndex !== null}
          onCancel={handleCancel}
        />
        
        <DaftarMahasiswa 
          data={mahasiswa} 
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
