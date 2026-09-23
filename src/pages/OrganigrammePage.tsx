import PageTitle from "../components/layout/PageTitle";
import OrgChart from "../components/common/OrgChart";

export default function OrganigrammePage() {
  return (
    <>
      <PageTitle
        eyebrow="Organisation"
        title="Organigramme"
        subtitle="Une chaîne de commandement claire : tutelle étatique, conseil d'administration, direction générale et divisions opérationnelles."
      />

      <section className="sec-pad">
        <div className="container-12">
          <OrgChart />
        </div>
      </section>
    </>
  );
}
