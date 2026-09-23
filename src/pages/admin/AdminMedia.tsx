import { useState, useRef } from "react";
import { Upload, Trash2, Link as LinkIcon, Video, Folder, CheckCircle } from "lucide-react";
import { useMediaStore } from "../../content/store";

export default function AdminMedia() {
  const { media, saveMedia } = useMediaStore();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    if (confirm("Supprimer ce fichier définitivement ?")) {
      saveMedia(media.filter((m: any) => m.id !== id && m.title !== id));
    }
  };

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(url || window.location.origin + "/uploads/example.png");
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const ArrayOfFiles = Array.from(files);
    
    const newMedias = ArrayOfFiles.map(file => {
      let type = "document";
      if (file.type.includes("image")) type = "photo";
      if (file.type.includes("video")) type = "video";
      
      const sizeKB = Math.round(file.size / 1024);
      const sizeStr = sizeKB > 1000 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;

      const url = type === "photo" ? URL.createObjectURL(file) : "";

      return {
        id: Date.now() + Math.random(),
        title: file.name,
        name: file.name,
        type,
        size: sizeStr,
        src: url,
        url,
        date: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
      };
    });

    saveMedia([...newMedias, ...media]);
  };

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Zone */}
      <div 
        onDragEnter={onDrag}
        onDragLeave={onDrag}
        onDragOver={onDrag}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`rounded-lg shadow-sm border-2 border-dashed p-10 text-center transition cursor-pointer ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:bg-gray-50"
        }`}
      >
        <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${dragActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}>
          <Upload className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-gray-900 mb-1 text-lg">Cliquez ou glissez vos fichiers ici</h3>
        <p className="text-sm text-gray-500">Formats supportés : JPG, PNG, MP4, PDF (Max: 500Mo)</p>
        <input 
          type="file" 
          multiple
          className="hidden" 
          ref={fileInputRef} 
          onChange={(e) => handleUpload(e.target.files)}
        />
      </div>
      
      {/* Media Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="font-bold text-gray-800">Fichiers récents</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 rounded bg-blue-50 text-xs font-bold text-blue-700 cursor-pointer border border-blue-200">Tout</span>
            <span className="px-3 py-1.5 rounded border border-gray-200 text-xs font-semibold text-gray-600 cursor-pointer hover:bg-gray-50">Images</span>
            <span className="px-3 py-1.5 rounded border border-gray-200 text-xs font-semibold text-gray-600 cursor-pointer hover:bg-gray-50">Vidéos</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((item: any) => {
             // Backward compatibility for old format vs new format
             const mTitle = item.title || item.name;
             const mUrl = item.src || item.url;
             const mType = item.type;
             const mId = item.id || item.title;

             return (
            <div key={mId} className="group relative rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-square bg-gray-50 flex items-center justify-center relative">
                {mType === "photo" || mType === "image" ? (
                  <img src={mUrl} alt={mTitle} className="w-full h-full object-cover" />
                ) : mType === "video" ? (
                  <Video className="w-10 h-10 text-gray-400" />
                ) : (
                  <Folder className="w-10 h-10 text-gray-400" />
                )}
                
                {/* Actions overlay */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button 
                    onClick={() => handleCopy(mId, mUrl)}
                    className="p-2.5 rounded-full bg-white text-gray-700 hover:text-blue-600 hover:scale-110 transition scale-90" 
                    title="Copier le lien public"
                  >
                    {copiedId === mId ? <CheckCircle className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => handleDelete(mId)}
                    className="p-2.5 rounded-full bg-red-500 text-white hover:bg-red-600 hover:scale-110 transition scale-90" 
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-gray-900 truncate" title={mTitle}>{mTitle}</p>
                <div className="flex items-center justify-between mt-1.5 text-[10px] text-gray-500 font-medium">
                  <span className="uppercase px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">{mType}</span>
                  <span>{item.size || "Média web"}</span>
                </div>
              </div>
            </div>
          )})}
          {media.length === 0 && (
             <div className="col-span-full py-12 text-center text-gray-500 text-sm">
                Aucun fichier média trouvé. Uploadez-en un ci-dessus !
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
