"use client";
import Image from "next/legacy/image";

const GoodHands = () => {
  return (
    <section className='overflow-hidden grid gap-y-[35px] xl:gap-y-[0px] grid-cols-[10%_auto_10%] xl:grid-cols-[18%_16%_16%_16%_16%_18%] grid-rows-[auto_auto_auto_auto_auto] xl:grid-rows-[auto_auto_auto_auto_auto]'>
      <div className='grid-item-1 col-start-2 col-end-6 row-start-5 row-end-6 xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-6 mt-[50px] xl:mt-0'>
        <div className='w-full h-full xl:h-[100%] relative'>
          <div className='w-full h-[305px] md:h-[700px] lg:h-[820px] xl:h-[311px]'>
            <Image
              alt='image'
              src='/images/forest.jpg'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className="absolute w-full h-[335px] md:h-[700px] lg:h-[845px] xl:h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-mask2mobile xl:after:bg-mask2 after:bg-position-mask1 after:bg-no-repeat after:bg-cover mt-[-20px] xl:mt-0"></div>
        </div>
      </div>

      <div className='grid-item-2 col-start-2 col-end-3 row-start-1 row-end-2 xl:col-start-4 xl:col-end-7 xl:row-start-1 xl:row-end-2 pl-0 xl:pl-[80px] xl:pt-[75px]'>
        <h2 className='titre-section my-4 text-left mb-[34px] xl:text-left hidden xl:block'>
          Vous êtes entre de <span>bonnes mains</span>
        </h2>
        <p className='text-[12px] xl:text-[14px] text-primary-black mb-[0px] text-center xl:text-left max-w-[auto] xl:max-w-[348px]'>
          Nous sommes des voyageurs aguerris avant d'être des assureurs. Les
          pépins en voyage,{" "}
          <span className='text-primary-orange'>ça nous connait !</span> Nos
          experts sélectionnent donc pour vous le produit sur mesure qui répond
          parfaitement à vos besoins.
        </p>
      </div>
      <div className='grid-item-3 col-start-1 col-end-3 row-start-2 row-end-3 xl:col-start-3 xl:col-end-5 xl:row-start-2 xl:row-end-4 relative pb-0'>
        <div className='z-1 relative w-[100%]'>
          <div className='absolute z-10 top-[-15px] left-[60px] xl:top-[30px] xl:left-0'>
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
          <div className='absolute left-[150px] !top-[205px] xl:!top-[150px] xl:left-[250px]'>
            <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
              Rapide
            </h3>
            <p className='text-[12px] xl:text-[14px] text-primary-black mb-[0px] max-w-[220px]'>
              Votre assurance personnalisable à portée de clic. C'est le contrat
              qui s'adapte à vous et non l'inverse.
            </p>
          </div>
        </div>
      </div>
      <div className='grid-item-4 col-start-2 col-end-3 row-start-3 row-end-4 xl:col-start-5 xl:col-end-7 xl:row-start-3 xl:row-end-5 relative mt-[50px] xl:mt-0'>
        <div className='z-1 relative md:w-[40%] md:my-0 md:mx-[auto] xl:m-0 xl:w-[100%]'>
          <div className='absolute z-10 top-[20px] xl:top-[10px] left-[45px] w-[198px] h-[202px] xl:w-[218px] xl:h-[223px]'>
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
          <div className='absolute top-[220px] left-[75px] xl:!top-[250px] xl:left-[100px]'>
            <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
              Sur mesure
            </h3>
            <p className='text-[12px] xl:text-[14px] text-primary-black mb-[0px] max-w-[248px]'>
              Fini les contrats opaques et les petites lignes. On vous indique
              clairement ce qui est couvert et ce qui ne l'est pas.
            </p>
          </div>
        </div>
      </div>
      <div className='grid-item-5 col-start-2 col-end-4 row-start-4 row-end-5 xl:col-start-2 xl:col-end-5 xl:row-start-4 xl:row-end-6 relative flex justify-end xl:justify-start'>
        <div className='z-1 relative md:w-[50%] md:ml-[auto] xl:m-0 xl:w-[100%]'>
          <div className='absolute z-10 top-[0px] left-[50px] xl:top-[50px] xl:left-[50px] w-[211px] h-[211px]  xl:w-[233px] xl:h-[233px]'>
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
          <div className='absolute !top-[215px] left-[25px] xl:!top-[95px] xl:left-[250px]'>
            <h3 className='text-[21px] font-[600] text-primary-orange mb-[14px] mt-[0px]'>
              RSE
            </h3>
            <p className='text-[12px] xl:text-[14px] text-primary-black mb-[0px] max-w-[250px]'>
              Les voyageurs de l'équipe sont à votre écoute et vous accompagnent
              car chez nous vous êtes tout sauf des numéros de dossier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GoodHands;
