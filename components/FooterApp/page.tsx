"use client";
import Image from "next/legacy/image";
import YupwegoSlogan from "../icons/YupwegoSlogan";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "../icons/SocialMediaIcon";
import TrustPilotIcon from "../icons/TrustpilotIcon";
import EarthIcon from "../icons/EarthIcon";
import HumanEngagedIcon from "../icons/HumanEngagedIcon";
import FileIcon from "../icons/FileIcon";
import PartnerIcon from "../icons/PartnerIcon";
import Link from "next/link";

const FooterFirstBlock = () => (
  <div className="flex flex-wrap flex-row items-center justify-around rounded-[30px] bg-[#ffffff1a] mb-10 px-[50px] py-[23px]">
    <div>
      <p className="text-[20px] text-white w-[450px] h-[43px]">
        Votre assurance fait du bien à la planète
      </p>
    </div>
    <div>
      <p className="text-[14px] text-white w-[236px] h-[43px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center rounded-[100px] bg-white w-[190px] h-[61px]">
      <Image src="/images/Planet.png" alt="planet" width="145" height="54" />
    </div>
    <button className="flex flex-col items-center justify-center rounded-[100px] bg-primary-yellow w-[190px] h-[61px] text-primary-black text-[10px] font-bold mx-5">
      NOS ENGAGEMENTS
    </button>
  </div>
);

type AboutInfoComponentType = {
  Icon: JSX.Element;
  label: string;
};

const AboutInfoComponent = ({
  Icon,
  label,
}: AboutInfoComponentType): JSX.Element => (
  <div className="flex flex-wrap flex-col items-center justify-center w-[200px]">
    {Icon}
    <p className="font-normal text-[12px] leading-[16px] text-primary-pink text-center mt-3">
      {label}
    </p>
  </div>
);

type OtherLinkFooterType = {
  label: string;
  link: string;
};

const OtherLinkFooter = ({ label, link }: OtherLinkFooterType) => (
  <Link href={link} className="font-bold text-white text-[10px] mx-6">
    {label}
  </Link>
);

type LegalNoticeType = {
  link: string;
  label: string;
};

const LegalNotice = ({ link, label }: LegalNoticeType) => (
  <Link href={link} className="font-normal text-[12px]">
    {label}
  </Link>
);

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 bg-primary-green">
        <FooterFirstBlock />

        <YupwegoSlogan />

        <div className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-white text-[20px] leading-[25px] mb-3">
            Abonnez-vous à notre newsletter
          </h2>

          <div className="relative flex flex-row items-center justify-between rounded-[100px] bg-white w-[436px] h-[54px]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="VOTRE EMAIL"
              className="font-bold text-[10px] ml-4 placeholder-primary-black h-[50px]"
            />
            <button className="absolute top-0 right-0 p-[21px] rounded-r-[100px] bg-primary-pink font-bold text-[10px] leading-[12px]">
              OK
            </button>
          </div>

          <hr className="w-5 h-1 m-5 bg-white rounded-xl" />

          <h2 className="text-white text-[20px] leading-[25px] mb-3">
            et suivez-nous
          </h2>
          <div className="flex flex-row items-center justify-between">
            <FacebookIcon />
            <TikTokIcon />
            <LinkedInIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="flex flex-row items-start justify-around my-10 py-10 bg-[#FFFFFF1a] w-full p-20">
          <AboutInfoComponent
            {...{ Icon: <TrustPilotIcon />, label: "4,3/5 SUR TRUSTPILOT" }}
          />
          <AboutInfoComponent
            {...{ Icon: <PartnerIcon />, label: "PARTENAIRES CERTIFIÉS" }}
          />
          <AboutInfoComponent
            {...{
              Icon: <HumanEngagedIcon />,
              label: "SERVICE HUMAIN & ENGAGÉ",
            }}
          />
          <AboutInfoComponent
            {...{
              Icon: <FileIcon />,
              label:
                "OFFRE SUR MESURE EN 2 MINUTES SANS LIMITE DE DURÉE ARRÊTABLE À TOUT MOMENT",
            }}
          />
          <AboutInfoComponent
            {...{
              Icon: <EarthIcon />,
              label:
                "COUVERTURE OPTIMALE POUR COURT ET LONG SEJOUR PARTOUT DANS LE MONDE",
            }}
          />
        </div>

        <div className="flex flex-row items-center justify-around">
          <OtherLinkFooter {...{ link: "#", label: "YUPWEGO" }} />
          <OtherLinkFooter {...{ link: "#", label: "BLOG" }} />
          <OtherLinkFooter {...{ link: "#", label: "AIDES ET URGENCES" }} />
          <OtherLinkFooter {...{ link: "#", label: "YUPWEGO" }} />
          <p className="border-inherit border rounded-full font-bold text-white text-[10px] p-6">
            RÉALISER UNE SIMULATION
          </p>
        </div>
      </div>
      <div className="flex flex-row items-end justify-between p-8 bg-primary-background">
        <div className="w-full"></div>
        <div className="w-full">
          <p className="font-bold text-[12px] text-center">
            &copy; {new Date().getFullYear()} YUPWEGO, TOUS DROITS RÉSÈRVÉS
          </p>
        </div>
        <div className="w-full text-right">
          <LegalNotice
            {...{ link: "#", label: "CONDITIONS GÉNÉRALÉS DE VENTE" }}
          />
          &nbsp; | &nbsp;
          <LegalNotice {...{ link: "#", label: "MENTIONS LÉGALES" }} />
          &nbsp; | &nbsp;
          <LegalNotice
            {...{ link: "#", label: "POLITOQUE DE CONFIDENTIALITÉ" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
