import { useNavigate } from "react-router-dom";

const cn = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(' ');

function SidebarItem({ icon, label, active, onClick }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean,
  onClick?: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
        active 
          ? "bg-indigo-50 text-indigo-700" 
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <span className="w-4 h-4 flex-shrink-0">{icon}</span>
      {label}
    </button>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
    const navgate = useNavigate();

    function handleLogout() {
     navgate('/');
    }
  const role = "Professor";

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-slate-50">
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-4 border-b flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center overflow-hidden">
            <img src="/Icon.png" alt="Logo" className="w-7 h-7 object-contain invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div>
            <div className="font-bold text-slate-900 leading-tight">QuizFlow</div>
            <div className="text-xs text-indigo-600 font-medium">{role}</div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {role === 'Professor' && (
             <>
               <SidebarItem 
                 label="Meus Quizzes" 
                 active 
                 icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>} 
               />
               <SidebarItem 
                 label="Banco de Questões" 
                 icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>} 
               />
               <SidebarItem 
                 label="Relatórios" 
                 icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>} 
               />
             </>
          )}
        </nav>
        
        <div className="p-4 border-t">
          <button 
            className="w-full flex items-center px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors"
            onClick={handleLogout}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Sair
          </button>
        </div>
      </aside>
      
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}