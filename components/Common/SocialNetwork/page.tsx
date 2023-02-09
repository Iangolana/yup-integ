import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import LinkedIn from "@/components/icons/Linkedin";
import Tiktok from "@/components/icons/Tiktok";
import Youtube from "@/components/icons/Youtube";

const SocialNetwork = () => {
  const items = [
    { id: 1, link: "#", component: <Facebook /> },
    { id: 2, link: "#", component: <Tiktok /> },
    { id: 3, link: "#", component: <LinkedIn /> },
    { id: 4, link: "#", component: <Youtube /> },
    { id: 5, link: "#", component: <Instagram /> },
  ];
  return (
    <>
      <div className="social-network pb-[76px]">
        <div className="font-canelaText text-base lg:text-xl font-medium pb-5">
          et suivez-nous
        </div>

        <div className="flex items-center justify-center space-x-4">
          {items.map(({ id, link, component }) => {
            return (
              <a key={id} href={link}>
                {component}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialNetwork;
