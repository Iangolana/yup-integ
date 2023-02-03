"use client";
import LogoNoir from "@/components/icons/LogoNoir";
import Image from "next/legacy/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Avis = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true, 
  };

  return (
    <>
    <div className="flex flex-col h-full">
      <div className="logo-wrapper flex justify-center pt-6 pb-3 px-3">
        <LogoNoir />
      </div>
      <h2 className="titre-section my-4">
        C’est <span>vous</span> qui en parlez le mieux
      </h2>
        <div className="h-full flex flex-col justify-center relative">
          <div className="bg-[#E2F6D2] relative z-10 top-[30px] rounded-30 w-full max-w-[317px] h-[67px] mx-auto"></div>
          <div className="w-full overflow-hidden">
            <Slider {...settings}>
              <div className="avis px-5">
                <div className="w-full max-w-[433px] min-h-[337px] mx-auto bg-white rounded-30  p-9 flex flex-col items-center justify-center">
                  <div className="avatar pb-2 rounded-full w-[79px] h-[79px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/avatar.jpg"
                      width="79"
                      height="79"
                      objectFit="cover"
                    />
                  </div>
                  <div className="etoile">
                    <Image src="/images/etoile.png" width="63" height="13" />
                  </div>
                  <div className="text-[#BFA892] text-lg font-canelaText">
                    Proche, flexible et réactif
                  </div>
                  <div className="grow text-primary-black leading-5 py-1 text-xs text-center">
                    De retour de 9 mois de voyage à vélo avec nos enfants en
                    Amérique Latine, nous avons testé et approuvé Yupwego. Gilles
                    notre contact a toujours été disponible, proche, et réactif.
                    Flexibilité de l'offre suivant les pays traversés et
                    ajout/suppression ...
                  </div>
                  <div className="author uppercase mt-auto pt-2 flex items-end font-hurmeSans1 leading-5 text-sm">
                    Maria Loper,{" "}
                    <span className="text-10 pl-1 leading-4">Juin 2022</span>
                  </div>
                </div>
              </div>
              <div className="avis px-5">
                <div className="w-full max-w-[433px] min-h-[337px] mx-auto bg-white rounded-30  p-9 flex flex-col items-center justify-center">
                  <div className="avatar pb-2 rounded-full w-[79px] h-[79px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/avatar.jpg"
                      width="79"
                      height="79"
                      objectFit="cover"
                    />
                  </div>
                  <div className="etoile">
                    <Image src="/images/etoile.png" width="63" height="13" />
                  </div>
                  <div className="text-[#BFA892] text-lg font-canelaText">
                    Proche, flexible et réactif
                  </div>
                  <div className="grow text-primary-black leading-5 py-1 text-xs text-center">
                    De retour de 9 mois de voyage à vélo avec nos enfants en
                    Amérique Latine, nous avons testé et approuvé Yupwego. Gilles
                    notre contact a toujours été disponible, proche, et réactif.
                    Flexibilité de l'offre suivant les pays traversés et
                    ajout/suppression ...
                  </div>
                  <div className="author uppercase mt-auto pt-2 flex items-end font-hurmeSans1 leading-5 text-sm">
                    Maria Loper,{" "}
                    <span className="text-10 pl-1 leading-4 leading-4">Juin 2022</span>
                  </div>
                </div>
              </div>
              <div className="avis px-5">
                <div className="w-full max-w-[433px] min-h-[337px] mx-auto bg-white rounded-30  p-9 flex flex-col items-center justify-center">
                  <div className="avatar pb-2 rounded-full w-[79px] h-[79px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/avatar.jpg"
                      width="79"
                      height="79"
                      objectFit="cover"
                    />
                  </div>
                  <div className="etoile">
                    <Image src="/images/etoile.png" width="63" height="13" />
                  </div>
                  <div className="text-[#BFA892] text-lg font-canelaText">
                    Proche, flexible et réactif
                  </div>
                  <div className="grow text-primary-black leading-5 py-1 text-xs text-center">
                    De retour de 9 mois de voyage à vélo avec nos enfants en
                    Amérique Latine, nous avons testé et approuvé Yupwego. Gilles
                    notre contact a toujours été disponible, proche, et réactif.
                    Flexibilité de l'offre suivant les pays traversés et
                    ajout/suppression ...
                  </div>
                  <div className="author uppercase mt-auto pt-2 flex items-end font-hurmeSans1 leading-5 text-sm">
                    Maria Loper,{" "}
                    <span className="text-10 pl-1 leading-4">Juin 2022</span>
                  </div>
                </div>
              </div>
              <div className="avis px-5">
                <div className="w-full max-w-[433px] min-h-[337px] mx-auto bg-white rounded-30  p-9 flex flex-col items-center justify-center">
                  <div className="avatar pb-2 rounded-full w-[79px] h-[79px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/avatar.jpg"
                      width="79"
                      height="79"
                      objectFit="cover"
                    />
                  </div>
                  <div className="etoile">
                    <Image src="/images/etoile.png" width="63" height="13" />
                  </div>
                  <div className="text-[#BFA892] text-lg font-canelaText">
                    Proche, flexible et réactif
                  </div>
                  <div className="grow text-primary-black leading-5 py-1 text-xs text-center">
                    De retour de 9 mois de voyage à vélo avec nos enfants en
                    Amérique Latine, nous avons testé et approuvé Yupwego. Gilles
                    notre contact a toujours été disponible, proche, et réactif.
                    Flexibilité de l'offre suivant les pays traversés et
                    ajout/suppression ...
                  </div>
                  <div className="author uppercase mt-auto pt-2 flex items-end font-hurmeSans1 leading-5 text-sm">
                    Maria Loper,{" "}
                    <span className="text-10 pl-1 leading-4">Juin 2022</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
  
      <div className="text-center mb-2">
        <button type="button" className="btn bg-primary-marron">
          Voir tous les avis
        </button>
      </div>
    </div>
    </>
  );
};

export default Avis;
