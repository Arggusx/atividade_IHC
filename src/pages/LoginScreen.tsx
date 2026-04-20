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

          <div className="flex justify-between items-center text-sm pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="text-slate-600">Lembrar-me</span>
            </label>
            <a href="#" className="text-indigo-600 font-medium hover:underline">Esqueci a senha</a>
          </div>

          <div className="pt-4 space-y-3">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Simular login como:</div>
            <div className="flex gap-2">
              {['student', 'teacher', 'admin'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={cn(
                    "flex-1 py-2 text-xs font-medium rounded-2xl border transition-all",
                    role === r
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {r === 'student' ? 'Aluno' : r === 'teacher' ? 'Prof' : 'Admin'}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-2xl flex items-center justify-center transition-colors disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Carregando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
                  Entrar
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
