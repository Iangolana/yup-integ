import Globe from "@/components/icons/Globe";
import HumanService from "@/components/icons/HumanService";
import OffreSurMesure from "@/components/icons/OffreSurMesure";
import PartenaireCertifie from "@/components/icons/PartenaireCertifie";
import Truspilot from "@/components/icons/Truspilot";

const items = [
  {
    id:1,
    component: <Truspilot />,
    text: "4,3/5 sur Truspilot",
  },
  {
    id:2,
    component: <PartenaireCertifie />,
    text: "Partenaires certifiés",
  },
  {
    id:3,
    component: <HumanService />,
    text: "Service humain <br/> & engagé",
  },
  {
    id:4,
    component: <OffreSurMesure />,
    text: "Offre sur mesure <br/> en 2 minutes <br/> sans limite de durée arrêtable à tout moment",
  },
  {
    id:5,
    component: <Globe />,
    text: "Couverture optimale <br/> pour court et long séjour partout dans le monde",
  },
];

const Bandeau = () => {
  return (
    <>
      <div className=" flex justify-between items-start space-x-5">
        {items.map(({id, component, text})=>{
            return(
                <div key={id} className="uppercase flex-1 text-primary-pink flex flex-col max-w-[210px] space-y-5 justify-center items-center text-sm tracking-wider">
                    {component}
                    <div className="text-center" dangerouslySetInnerHTML={{__html:text}} />
                </div>
            )
        })}
      </div>
    </>
  );
};

export default Bandeau;
