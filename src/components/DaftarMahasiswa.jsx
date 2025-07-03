import { useState } from "react";
import { User, Edit3, Plus, Users, GraduationCap, BookOpen } from "lucide-react";

// FormMahasiswa Component
function FormMahasiswa({ form, onChange, onSubmit, isEdit, onCancel }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          {isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa Baru"}
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={onChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            required
          />
        </div>
        
        <div className="relative">
          <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="nim"
            placeholder="Nomor Induk Mahasiswa"
            value={form.nim}
            onChange={onChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            required
          />
        </div>
        
        <div className="flex gap-3 pt-2">
          <button
            onClick={onSubmit}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isEdit ? "Update Data" : "Tambah Mahasiswa"}
          </button>
          
          {isEdit && (
            <button
              onClick={onCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
            >
              Batal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
