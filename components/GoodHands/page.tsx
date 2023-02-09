"use client";
import Image from "next/legacy/image";

const GoodHands = () => {
  return (
    <section className='grid gap-y-[25px] lg:gap-y-[0px] grid-cols-[10%_auto_10%] lg:grid-cols-[18%_16%_16%_16%_16%_18%] grid-rows-[auto_1fr_1fr_1fr_1fr] lg:grid-rows-[auto_auto_auto_auto_auto]'>
      <div className='grid-item-1 col-start-2 col-end-6 row-start-5 row-end-6 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-6'>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt='image'
            src='/images/forest.jpg'
            layout='fill'
            objectFit='cover'
          />
          <div className="absolute w-full h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-mask2mobile lg:after:bg-mask2 after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
        </div>
      </div>

      <div className='grid-item-2 col-start-2 col-end-3 row-start-1 row-end-2 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-2 pl-0 lg:pl-[80px] lg:pt-[75px]'>
        <h2 className='text-[30px] font-[400] text-primary-black mb-[34px] text-left hidden ld:block'>
          Vous êtes entre de{" "}
          <span className='text-primary-orange underline decoration-solid decoration-[5px]'>
            bonnes mains
          </span>
        </h2>
        <p className='text-[14px] text-primary-black mb-[0px] text-center lg:text-left max-w-[auto] lg:max-w-[348px]'>
          Nous sommes des voyageurs aguerris avant d'être des assureurs. Les
          pépins en voyage,{" "}
          <span className='text-primary-orange'>ça nous connait !</span> Nos
          experts sélectionnent donc pour vous le produit sur mesure qui répond
          parfaitement à vos besoins.
        </p>
      </div>
      <div className='grid-item-3 col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-4 relative pb-[100px] lg:pb-0'>
        <div className='z-1 relative'>
          <div className='absolute z-10 top-[-15px] left-[60px] lg:top-[30px] lg:left-0'>
            <Image
              src='/images/vitesse.svg'
              width='233'
              height='233'
              alt='rapide'
            />
          </div>
          <div className='relative z-1'>
            <Image
              src='/images/item2.svg'
              width='329'
              height='245'
              alt='rapide'
            />
          </div>
        </div>

        <div className='absolute left-[150px] !top-[205px] lg:!top-[150px] lg:left-[250px]'>
          <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
            Rapide
          </h3>
          <p className='text-[14px] text-primary-black mb-[0px] max-w-[220px]'>
            Votre assurance personnalisable à portée de clic. C'est le contrat
            qui s'adapte à vous et non l'inverse.
          </p>
        </div>
      </div>
      <div className='grid-item-4 col-start-2 col-end-3 row-start-3 row-end-4 lg:col-start-5 lg:col-end-7 lg:row-start-3 lg:row-end-5 relative'>
        <div className='z-1 relative'>
          <div className='absolute z-10 top-[20px] lg:top-[10px] left-[45px] w-[198px] h-[202px] lg:w-[218px] lg:h-[223px]'>
            <Image
              src='/images/sur_mesure.svg'
              layout='fill'
              objectFit='contain'
              alt='Sur mesure'
            />
          </div>
          <div className='relative z-1'>
            <Image
              src='/images/item3.svg'
              width='245'
              height='329'
              alt='Sur mesure'
            />
          </div>
        </div>

        <div className='absolute top-[220px] left-[75px] lg:!top-[250px] lg:left-[100px]'>
          <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
            Sur mesure
          </h3>
          <p className='text-[14px] text-primary-black mb-[0px] max-w-[248px]'>
            Fini les contrats opaques et les petites lignes. On vous indique
            clairement ce qui est couvert et ce qui ne l'est pas.
          </p>
        </div>
      </div>
      <div className='grid-item-5 col-start-2 col-end-4 row-start-4 row-end-5 lg:col-start-2 lg:col-end-5 lg:row-start-4 lg:row-end-6 relative flex justify-end lg:justify-start'>
        <div className='z-1 relative'>
          <div className='absolute z-10 top-[0px] left-[50px] lg:top-[50px] lg:left-[50px] w-[211px] h-[211px]  lg:w-[233px] lg:h-[233px]'>
            <Image
              src='/images/rse.svg'
              layout='fill'
              objectFit='contain'
              alt='RSE'
            />
          </div>
          <div className='relative z-1 w-[329px] h-[245px] '>
            <Image
              src='/images/item4.svg'
              layout='fill'
              objectFit='contain'
              alt='RSE'
            />
          </div>
        </div>

        <div className='absolute !top-[215px] left-[25px] lg:!top-[95px] lg:left-[250px]'>
          <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
            RSE
          </h3>
          <p className='text-[14px] text-primary-black mb-[0px] max-w-[250px]'>
            Les voyageurs de l'équipe sont à votre écoute et vous accompagnent
            car chez nous vous êtes tout sauf des numéros de dossier.
          </p>
        </div>
      </div>
    </section>
  );
};
export default GoodHands;
