import { Outlet, Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Image as ImageIcon, FileText, Settings, ShieldAlert, Users, LayoutDashboard } from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("eiforces_admin_auth") === "true";

  if (!isAuthenticated && location.pathname !== "/admin/login") {
    return <Navigate to="/admin/login" replace />;
  }

  if (location.pathname === "/admin/login") {
    return <Outlet />;
  }

  const handleLogout = () => {
    localStorage.removeItem("eiforces_admin_auth");
    navigate("/admin/login");
  };

  const navItems = [
    { name: "Tableau de bord", path: "/admin", icon: LayoutDashboard },
    { name: "Contenus & Textes", path: "/admin/contenu", icon: FileText },
    { name: "Médiathèque", path: "/admin/medias", icon: ImageIcon },
    { name: "Utilisateurs", path: "#", icon: Users },
    { name: "Paramètres", path: "#", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 text-white shrink-0 md:min-h-screen border-r border-gray-800 flex flex-col">
        <div className="p-5 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2 mb-2" target="_blank" title="Voir le site public">
            <ShieldAlert className="w-6 h-6 text-blue-500" />
            <span className="font-display font-bold text-lg">EIFORCES Admin</span>
          </Link>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Portail Community Manager</div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors w-full text-left"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 font-display">
            {navItems.find((i) => i.path === location.pathname)?.name || "Administration"}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
              CM
            </div>
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
