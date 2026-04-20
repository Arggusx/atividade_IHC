import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

function App() {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      if (role === 'teacher') {
      navigate('/teacher-dashboard');
      alert(`Logado como Professor! Redirecionando...`);
    } else {
      alert('Acesso restrito: Apenas professores podem acessar esta área.');
    }
      
    }, 800);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
            <img src="/Icon.png" className='h-10 w-10' alt="" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Entrar no QuizFlow</h1>
          <p className="text-slate-500 mt-2 text-sm">Acesse sua conta para continuar.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              defaultValue="teste@escola.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required 
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              defaultValue="123456"
              className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required 
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;