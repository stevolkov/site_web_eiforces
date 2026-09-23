import { FileText, Image as ImageIcon, Send, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Articles & Textes" icon={FileText} value="42" change="+3 cette semaine" link="/admin/contenu" />
        <StatCard title="Fichiers Médias" icon={ImageIcon} value="128" change="2.4 Go utilisés" link="/admin/medias" />
        <StatCard title="Visites du site" icon={Activity} value="3,492" change="+12% (7j)" link="#" />
        <StatCard title="Demandes contact" icon={Send} value="14" change="5 non lues" link="#" />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="font-bold text-gray-800 mb-4">Activité récente</h2>
          <div className="space-y-4">
            <ActivityItem 
              action="Modification du texte" 
              target="Page d'accueil - Mot du DG" 
              time="Il y a 2 heures" 
            />
            <ActivityItem 
              action="Ajout de média" 
              target="ceremonie_remise_diplomes.mp4" 
              time="Hier à 14h30" 
            />
            <ActivityItem 
              action="Nouvel article publié" 
              target="Visite d'inspection CEEAC" 
              time="Le 12 Septembre" 
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="font-bold text-gray-800 mb-4">Actions rapides</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/admin/contenu" className="p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition text-center group">
              <FileText className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-gray-700">Créer un article</span>
            </Link>
            <Link to="/admin/medias" className="p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition text-center group">
              <ImageIcon className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-gray-700">Publier une vidéo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, icon: Icon, value, change, link }: { title: string; icon: any; value: string; change: string; link: string }) {
  return (
    <Link to={link} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-blue-300 transition block">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="p-2 rounded-md bg-blue-50 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">{change}</p>
    </Link>
  );
}

function ActivityItem({ action, target, time }: { action: string; target: string; time: string }) {
  return (
    <div className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{action}</p>
        <p className="text-xs text-gray-500">{target}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}
