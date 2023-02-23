"use client";

import Covid19 from "@/components/icons/Covid19";
import Document from "@/components/icons/Document";
import Meteo from "@/components/icons/Meteo";
import Monnaie from "@/components/icons/Monnaie";
import NumeroUrgence from "@/components/icons/NumeroUrgence";
import Umbrella from "@/components/icons/Umbrella";
import Vaccination from "@/components/icons/Vaccination";
import Visa from "@/components/icons/Visa";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lists = [
  {
    titre: "COVID-19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "",
    icon: <Covid19 />,
  },
  {
    titre: "Documents obligatoires",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "#",
    icon: <Document />,
  },
  {
    titre: "Visa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "",
    icon: <Visa />,
  },
  {
    titre: "Monnaie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "",
    icon: <Monnaie />,
  },
  {
    titre: "Vaccination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "#",
    icon: <Vaccination />,
  },
  {
    titre: "Assurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "",
    icon: <Umbrella />,
  },
  {
    titre: "Météo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "#",
    icon: <Meteo />,
  },
  {
    titre: "Numéros d’urgence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus elit.",
    link: "#",
    icon: <NumeroUrgence />,
  },
];

const Editorial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    //centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
]
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="py-10 group lg:odd:ml-[280px] lg:even:mr-[172px] lg:flex flex-wrap lg:even:flex-row-reverse lg:space-x-10 lg:even:space-x-reverse">
          <div className="px-9 lg:px-0 pb-4 lg:pb-0 content-wrapper flex-1">
            <div className="titre-section-h2">
              Gabarit de mise en avant de contenu
            </div>
            <div className="text-xs lg:text-sm leading-5 md:leading-[22px]">
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <strong>consectetur adipiscing</strong> elit. Maecenas at odio
                finibus, blandit risus quis, lacinia urna. Aenean sed fermentum
                neque, <u>vitae euismod massa</u>. Aliquam fermentum, sem id
                bibendum fringilla, ante lectus rutrum lorem, quis viverra mi
                sapien vel purus. Aenean nec dui ac nulla hendrerit placerat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <ul>
                <li>Aliquam ullamcorper vehicula ornare. </li>
                <li>Pellentesque maximus erat a arcu ultrices.</li>
                <li>Eu consequat orci accumsan. </li>
                <li>Vestibulum a porttitor mi.</li>
              </ul>
              <p>
                Aliquam ullamcorper vehicula ornare. Pellentesque maximus erat a
                arcu ultrices, eu consequat orci accumsan. Vestibulum a porttitor
                mi. Praesent viverra odio eu nunc sollicitudin feugiat. Aenean dui
                erat, suscipit ut lacus sed, faucibus ultricies metus.
              </p>
            </div>
          </div>
          <div className="py-4 md:py-0 image-wrapper">
            <div className="relative h-full overflow-hidden max-w-[395px] sm:max-w-[480px] lg;max-w-[530px] xl:max-w-[608px] max-h-[449px] group-odd:ml-auto group-even:mr-auto">
              <div className="mask w-full h-[290px] sm:h-[350px] lg:w-[608px] lg:h-[449px] z-10 relative after:content-[' '] after:absolute after:w-full after:h-full  after:bg-mask1editorial group-even:after:bg-mask2editorial after:bg-right-top group-even:after:bg-left-top after:bg-no-repeat after:bg-cover"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  alt="image"
                  src="/images/forest.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 group lg:odd:ml-[280px] lg:even:mr-[172px] lg:flex flex-wrap lg:even:flex-row-reverse lg:space-x-10 lg:even:space-x-reverse">
          <div className="px-9 lg:px-0 pb-4 lg:pb-0 content-wrapper flex-1">
            <div className="titre-section-h2">
              Gabarit de mise en avant de contenu
            </div>
            <div className="text-xs lg:text-sm leading-5 md:leading-[22px]">
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <strong>consectetur adipiscing</strong> elit. Maecenas at odio
                finibus, blandit risus quis, lacinia urna. Aenean sed fermentum
                neque, <u>vitae euismod massa</u>. Aliquam fermentum, sem id
                bibendum fringilla, ante lectus rutrum lorem, quis viverra mi
                sapien vel purus. Aenean nec dui ac nulla hendrerit placerat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <ul>
                <li>Aliquam ullamcorper vehicula ornare. </li>
                <li>Pellentesque maximus erat a arcu ultrices.</li>
                <li>Eu consequat orci accumsan. </li>
                <li>Vestibulum a porttitor mi.</li>
              </ul>
              <p>
                Aliquam ullamcorper vehicula ornare. Pellentesque maximus erat a
                arcu ultrices, eu consequat orci accumsan. Vestibulum a porttitor
                mi. Praesent viverra odio eu nunc sollicitudin feugiat. Aenean dui
                erat, suscipit ut lacus sed, faucibus ultricies metus.
              </p>
            </div>
          </div>
          <div className="py-4 md:py-0 image-wrapper">
            <div className="relative h-full overflow-hidden max-w-[395px] sm:max-w-[480px] lg;max-w-[530px] xl:max-w-[608px] max-h-[449px] group-odd:ml-auto group-even:mr-auto">
              <div className="mask w-full h-[290px] sm:h-[350px] lg:w-[608px] lg:h-[449px] z-10 relative after:content-[' '] after:absolute after:w-full after:h-full  after:bg-mask1editorial group-even:after:bg-mask2editorial after:bg-right-top group-even:after:bg-left-top after:bg-no-repeat after:bg-cover"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  alt="image"
                  src="/images/forest.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block max-w-[942px] mx-auto">
        <div className="flex flex-wrap">
          {lists.map((item, index) => (
            <div
              key={index}
              className="flex-initial w-1/4 px-3 py-4 flex flex-col items-center"
            >
              <div className="w-[75px] h-[75px] flex items-start justify-center">
                {item.icon}
              </div>
              <div className="pt-2 text-lg leading-6 font-medium font-canelaText">
                {item.titre}
              </div>
              <div className="text-sm text-center leading-4 py-3">
                <p>{item.description}</p>
              </div>
              {item.link && (
                <Link
                  href={item.link}
                  className="w-[202px] h-[54px] rounded-100 border border-primary-green flex items-center justify-center text-10 uppercase leading-3 font-bold hover:bg-primary-green hover:text-white transition-all"
                >
                  En savoir plus
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden slide-mobile max-w-[942px] mx-auto">
        <Slider className="w-full" {...settings}>
          {lists.map((item, index) => (
            <div key={index} className="flex-initial px-3 py-4 text-center">
              <div className="max-w-[80%] mx-auto">
                <div className="w-[75px] h-[75px] flex items-start justify-center mx-auto">
                  {item.icon}
                </div>
                <div className="pt-2 text-lg leading-6 font-medium font-canelaText">
                  {item.titre}
                </div>
                <div className="text-sm text-center leading-4 py-3">
                  <p>{item.description}</p>
                </div>
                {item.link && (
                  <Link
                    href={item.link}
                    className="w-[202px] h-[54px] mx-auto rounded-100 border border-primary-green flex items-center justify-center text-10 uppercase leading-3 font-bold hover:bg-primary-green hover:text-white transition-all"
                  >
                    En savoir plus
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Editorial;
