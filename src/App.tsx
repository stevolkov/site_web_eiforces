import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContent from "./pages/admin/AdminContent";
import AdminMedia from "./pages/admin/AdminMedia";

import HomePage from "./pages/HomePage";
import OrganisationPage from "./pages/OrganisationPage";
import GenesePage from "./pages/GenesePage";
import MissionsPage from "./pages/MissionsPage";
import OrganigrammePage from "./pages/OrganigrammePage";
import InfrastructuresPage from "./pages/InfrastructuresPage";
import FormationsPage from "./pages/FormationsPage";
import RecherchePage from "./pages/RecherchePage";
import CooperationPage from "./pages/CooperationPage";
import ActualitesPage from "./pages/ActualitesPage";
import ConcoursPage from "./pages/ConcoursPage";
import PublicationsPage from "./pages/PublicationsPage";
import MediathequePage from "./pages/MediathequePage";
import ContactPage from "./pages/ContactPage";
import ForumPage from "./pages/ForumPage";
import NotFoundPage from "./pages/NotFoundPage";

import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route index element={<AdminDashboard />} />
          <Route path="contenu" element={<AdminContent />} />
          <Route path="medias" element={<AdminMedia />} />
        </Route>

        {/* Public Routes */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/organisation" element={<OrganisationPage />} />
                  <Route path="/organisation/genese" element={<GenesePage />} />
                  <Route path="/organisation/missions" element={<MissionsPage />} />
                  <Route path="/organisation/organigramme" element={<OrganigrammePage />} />
                  <Route path="/infrastructures" element={<InfrastructuresPage />} />
                  <Route path="/formations" element={<FormationsPage />} />
                  <Route path="/recherche" element={<RecherchePage />} />
                  <Route path="/cooperation" element={<CooperationPage />} />
                  <Route path="/actualites" element={<ActualitesPage />} />
                  <Route path="/concours" element={<ConcoursPage />} />
                  <Route path="/publications" element={<PublicationsPage />} />
                  <Route path="/mediatheque" element={<MediathequePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/forum" element={<ForumPage />} />
                  <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                  <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
