import { motion } from "framer-motion";

export default function OrgChart() {
  return (
    <div className="relative py-8 md:py-12 px-4 font-sans" style={{ background: "linear-gradient(to bottom right, #e8f0fe, #f4f7fb)" }}>
      
      {/* ========================================================= */}
      {/* ======================= MOBILE VIEW ======================= */}
      {/* ========================================================= */}
      <div className="lg:hidden flex flex-col max-w-sm mx-auto">
        <h2 className="text-xl font-black text-[#0f2675] mb-6 text-center uppercase tracking-wide">
          La chaîne de commandement
        </h2>
        
        <div className="flex flex-col">
          <OrgBox title={<>CONSEIL D'ADMINISTRATION<br/>PRESIDENT</>} color="green" align="left" />
          
          <div className="pl-6 border-l-2 border-[#6698ff] ml-4 space-y-5 mt-4 pt-1 pb-4">
            <OrgBox color="green" title="Membres" align="left">
              <ul className="text-xs mt-2 space-y-1 opacity-90 font-medium">
                <li>- MINREX</li>
                <li>- MINFI</li>
                <li>- MINEPAT</li>
                <li>- SED/CGN</li>
                <li>- DGSN</li>
                <li>- CEMP/PR</li>
                <li>- Préfet de la Mefou et Afamba</li>
              </ul>
            </OrgBox>

            <OrgBox color="green" title="Partenaires stratégiques" align="left">
              <ul className="text-xs mt-2 space-y-1 opacity-90 font-medium">
                <li>- CHINE</li>
                <li>- ETATS UNIS D'AMERIQUE</li>
                <li>- FRANCE</li>
                <li>- JAPON/PNUD</li>
                <li>- ONU, UE, AU, CEEAC</li>
              </ul>
            </OrgBox>
            
            {/* DG node positioned slightly spaced */}
            <div className="pt-2">
              <OrgBox title={<>DIRECTION<br/>GENERALE</>} color="blue" align="left" />
            </div>

            <div className="pl-6 border-l-2 border-[#6698ff] ml-4 space-y-5 mt-4 pt-1 pb-2">
              <OrgBox title="CONSEILLERS TECHNIQUES" color="green" align="left" />
              <OrgBox title={<>CENTRE DE RECHERCHE<br/>ET DE DOCUMENTATION</>} color="blue" align="left" />
              <OrgBox title={<>DIRECTION ADMINISTRATIVE<br/>ET FINANCIERE</>} color="yellow" align="left" />
              <OrgBox title={<>DIRECTION TECHNIQUE<br/>ET LOGISTIQUE</>} color="yellow" align="left" />

              <div className="pt-2">
                <OrgBox title="DIRECTION DES ETUDES" color="blue" align="left" />
              </div>

              <div className="pl-6 border-l-2 border-[#6698ff] ml-4 space-y-6 mt-4 pt-1 pb-2">
                
                {/* Division Supérieur */}
                <div>
                   <OrganizationBox color="blue" align="left">
                      Division de l'Enseignement <u>Supérieur</u><br/>
                      de Sécurité et de Préparation<br/>aux Op. de Soutien à la Paix
                   </OrganizationBox>
                   <div className="pl-6 border-l-2 border-[#6698ff] ml-4 space-y-3 mt-4 pt-1 pb-2">
                     <OrgBox title="BUREAU EVALUATIONS" color="blue" align="left" small />
                     <OrgBox title="ASSISTANTS TECHNIQUES" color="blue" align="left" small />
                   </div>
                </div>

                {/* Division Fondamental */}
                <div>
                   <OrganizationBox color="blue" align="left">
                      Division de l'Enseignement <u>Fondamental</u><br/>
                      de Sécurité et de Préparation<br/>aux Op. de Soutien à la Paix
                   </OrganizationBox>
                   <div className="pl-6 border-l-2 border-[#6698ff] ml-4 space-y-3 mt-4 pt-1 pb-2">
                     <OrgBox title="POLE ORDRE PUBLIC" color="blue" align="left" small />
                     <OrgBox title="POLE POLICE JUDICIAIRE" color="blue" align="left" small />
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ========================================================= */}
      {/* ====================== DESKTOP VIEW ======================= */}
      {/* ========================================================= */}
      <div className="hidden lg:flex flex-col items-center overflow-x-hidden w-full">
        <div className="w-full min-w-[750px] max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* LEVEL 1 & 2 */}
          <div className="relative w-full flex justify-between items-center mb-0 px-2 lg:px-0">
            {/* Main Horizontal connecting line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-[#6698ff] -z-10" />

            <div className="w-[30%] flex justify-center z-10 relative bg-[#e8f0fe] p-1 lg:p-2">
              <OrgBox color="green" title="Membres" align="left">
                <ul className="text-[11px] lg:text-[13px] mt-2 space-y-1 opacity-90 font-medium">
                  <li>- MINREX</li>
                  <li>- MINFI</li>
                  <li>- MINEPAT</li>
                  <li>- SED/CGN</li>
                  <li>- DGSN</li>
                  <li>- CEMP/PR</li>
                  <li>- Préfet de la Mefou...</li>
                </ul>
              </OrgBox>
            </div>

            <div className="w-[36%] flex flex-col items-center relative z-10 bg-[#e8f0fe] p-1 px-2 lg:p-2 lg:px-6">
              <OrgBox title={<>CONSEIL D'ADMINISTRATION<br/><span className="text-sm lg:text-lg">PRESIDENT</span></>} color="green" />
              <div className="w-[2px] h-10 lg:h-14 bg-[#6698ff]" />
              <OrgBox title={<>DIRECTION<br/><span className="text-sm lg:text-lg">GENERALE</span></>} color="blue" />
              <div className="w-[2px] h-8 lg:h-10 bg-[#6698ff]" />
            </div>

            <div className="w-[30%] flex justify-center z-10 relative bg-[#e8f0fe] p-1 lg:p-2">
              <OrgBox color="green" title="Part. stratégiques" align="left">
                <ul className="text-[11px] lg:text-[13px] mt-2 space-y-1 opacity-90 font-medium whitespace-nowrap">
                  <li>- CHINE</li>
                  <li>- ETATS UNIS</li>
                  <li>- FRANCE</li>
                  <li>- JAPON/PNUD</li>
                  <li>- ONU, UE, AU</li>
                </ul>
              </OrgBox>
            </div>
          </div>

          {/* LEVEL 3: THE 5 BRANCHES */}
          <div className="relative w-full flex flex-col items-center">
            <div className="w-full flex relative">
              <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-[#6698ff]" />
              
              <div className="w-1/5 flex flex-col items-center px-2">
                <div className="w-[2px] h-6 bg-[#6698ff]" />
                <OrgBox title={<>CONSEILLERS<br/>TECHNIQUES</>} color="green" />
              </div>

              <div className="w-1/5 flex flex-col items-center px-1 relative">
                <div className="w-[2px] h-6 bg-[#6698ff]" />
                <OrgBox title={<>DIRECTION DES<br/>ETUDES</>} color="blue" />
                <div className="w-[2px] h-16 bg-[#6698ff] absolute top-full left-1/2 -translate-x-1/2 z-0" />
              </div>

              <div className="w-1/5 flex flex-col items-center px-1">
                <div className="w-[2px] h-6 bg-[#6698ff]" />
                <OrgBox title={<>CENTRE DE<br/>RECHERCHE ET DE<br/>DOCUMENTATION</>} color="blue" />
              </div>

              <div className="w-1/5 flex flex-col items-center px-1">
                <div className="w-[2px] h-6 bg-[#6698ff]" />
                <OrgBox title={<>DIRECTION<br/>ADMINISTRATIVE<br/>ET FINANCIERE</>} color="yellow" />
              </div>

              <div className="w-1/5 flex flex-col items-center px-2">
                <div className="w-[2px] h-6 bg-[#6698ff]" />
                <OrgBox title={<>DIRECTION<br/>TECHNIQUE ET<br/>LOGISTIQUE</>} color="yellow" />
              </div>
            </div>
          </div>

          {/* LEVEL 4: THE DIVISIONS */}
          <div className="mt-[64px] w-full max-w-[1000px] flex flex-col items-center mx-auto">
             <div className="w-full flex relative">
                <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#6698ff]" />
                
                <div className="w-1/2 flex flex-col items-center px-6">
                   <div className="w-[2px] h-6 bg-[#6698ff]" />
                   <OrganizationBox color="blue">
                      Division de l'Enseignement <span className="underline decoration-1 underline-offset-2">Supérieur</span><br/>
                      de Sécurité et de <span className="underline decoration-1 underline-offset-2">Préparation</span> aux<br/>
                      Operations de <span className="underline decoration-1 underline-offset-2">Soutien</span> à la <span className="underline decoration-1 underline-offset-2">Paix</span>
                   </OrganizationBox>

                   <div className="w-[2px] h-10 bg-[#6698ff]" />
                   <div className="relative w-[70%] flex">
                      <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#6698ff]" />
                      <div className="w-1/2 flex flex-col items-center px-2">
                         <div className="w-[2px] h-6 bg-[#6698ff]" />
                         <OrgBox title={<>BUREAU<br/>EVALUATIONS</>} color="blue" />
                      </div>
                      <div className="w-1/2 flex flex-col items-center px-2">
                         <div className="w-[2px] h-6 bg-[#6698ff]" />
                         <OrgBox title={<>ASSISTANTS<br/>TECHNIQUES</>} color="blue" />
                      </div>
                   </div>
                </div>

                <div className="w-1/2 flex flex-col items-center px-6">
                   <div className="w-[2px] h-6 bg-[#6698ff]" />
                   <OrganizationBox color="blue">
                      Division de l'Enseignement <span className="underline decoration-1 underline-offset-2">Fondamental</span><br/>
                      de Sécurité et de <span className="underline decoration-1 underline-offset-2">Préparation</span> aux<br/>
                      Operations de <span className="underline decoration-1 underline-offset-2">Soutien</span> à la <span className="underline decoration-1 underline-offset-2">Paix</span>
                   </OrganizationBox>

                   <div className="w-[2px] h-10 bg-[#6698ff]" />
                   <div className="relative w-[70%] flex">
                      <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#6698ff]" />
                      <div className="w-1/2 flex flex-col items-center px-2">
                         <div className="w-[2px] h-6 bg-[#6698ff]" />
                         <OrgBox title={<>POLE ORDRE<br/>PUBLIC</>} color="blue" />
                      </div>
                      <div className="w-1/2 flex flex-col items-center px-2">
                         <div className="w-[2px] h-6 bg-[#6698ff]" />
                         <OrgBox title={<>POLE<br/>POLICE<br/>JUDICIAIRE</>} color="blue" />
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrgBox({ title, color, children, align = "center", small = false }: any) {
  const bgObj = {
    green: "bg-gradient-to-b from-[#1f9f68] to-[#128151] border-b-4 border-[#0e613c]",
    blue: "bg-gradient-to-b from-[#3a6bf4] to-[#173cb6] border-b-4 border-[#0f2675]",
    yellow: "bg-gradient-to-b from-[#ffb415] to-[#f49300] border-b-4 border-[#bc7100]",
  };
  const textC = color === "yellow" ? "text-amber-950" : "text-white";
  const alignC = align === "center" ? "text-center items-center" : "text-left items-start";
  
  const textSize = small ? "text-xs space-y-1" : "text-[13.5px] leading-snug";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative w-full rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${bgObj[color as keyof typeof bgObj]} ${textC} ${alignC} flex flex-col justify-center px-4 py-3 z-10 h-full`}
    >
      <span className={`font-bold tracking-wide uppercase ${textSize}`}>{title}</span>
      {children && <div className="mt-1 w-full">{children}</div>}
    </motion.div>
  );
}

function OrganizationBox({ children, color, align = "center" }: any) {
  const bgObj = {
    blue: "bg-gradient-to-b from-[#5c98ff] to-[#3a7bf4] border-b-4 border-[#173cb6]",
  };
  const alignC = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative w-full rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${bgObj[color as keyof typeof bgObj]} text-white ${alignC} flex flex-col justify-center px-6 py-4 z-10`}
    >
      <span className="font-bold text-[14px] leading-tight text-white/95">{children}</span>
    </motion.div>
  );
}
