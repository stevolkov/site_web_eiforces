import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    if (username === "admin" && password === "admin") {
      localStorage.setItem("eiforces_admin_auth", "true");
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 grid place-items-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-900 text-white p-6 text-center border-b border-gray-800">
          <div className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold mb-2">Espace Restreint</div>
          <h1 className="text-2xl font-display font-bold">Portail CM</h1>
        </div>
        
        <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-5">
          {error && (
            <div className="p-3 rounded-md bg-red-50 text-red-600 border border-red-200 text-sm">
              Identifiants incorrects. Indice: admin/admin.
            </div>
          )}
          
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">Identifiant</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nom d'utilisateur"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">Mot de passe</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <button type="submit" className="w-full rounded-md bg-blue-600 text-white font-semibold py-2.5 text-sm hover:bg-blue-700 transition">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
