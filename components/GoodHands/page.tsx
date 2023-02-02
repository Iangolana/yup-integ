"use client";
import Image from "next/legacy/image";

const GoodHands = () => {
  return (
    <section className='grid grid-cols-[18%_16%_16%_16%_16%_18%] grid-rows-[auto_auto_auto_auto_auto]'>
      <div className='grid-item-1 col-start-1 col-end-4 row-start-1 row-end-6'>
        <div style={{ width: "100%", height: "694px", position: "relative" }}>
          <Image
            alt='image'
            src='/images/item1.svg'
            layout='fill'
            // objectFit='contain'
          />
        </div>
      </div>
      <div className='grid-item-2 col-start-4 col-end-7 row-start-1 row-end-2 pl-[25px] pt-[75px]'>
        <h2 className='text-[30px] font-[400] text-[#363636] mb-[34px]'>
          Vous êtes entre de{" "}
          <span className='text-[#F19551] underline decoration-solid decoration-[5px]'>
            bonnes mains
          </span>
        </h2>
        <p className='text-[14px] text-[#363636] mb-[0px] max-w-[310px]'>
          Nous sommes des voyageurs aguerris avant d'être des assureurs. Les
          pépins en voyage, ça nous connait ! Nos experts sélectionnent donc
          pour vous le produit sur mesure qui répond parfaitement à vos besoins.
        </p>
      </div>
      <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] grid-item-3 col-start-3 col-end-5 row-start-2 row-end-4'>
        <div className='z-1 col-start-1 col-end-2 relative'>
          <Image
            src='/images/item2.svg'
            width='329'
            height='245'
            alt='rapide'
          />
        </div>

        <div className='col-start-2 col-end-3 row-start-2 row-end-3 mt-[-85px] ml-[-50px] z-1000 relative'>
          <h3 className='text-[21px] font-[600] text-[#f19551] mb-[14px] mt-[0px]'>
            Rapide
          </h3>
          <p className='text-[14px] text-[#363636] mb-[0px] max-w-[213px]'>
            Votre assurance personnalisable à portée de clic. C'est le contrat
            qui s'adapte à vous et non l'inverse.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] grid-item-4 col-start-5 col-end-7 row-start-3 row-end-5'>
        <Image
          src='/images/item3.svg'
          width='329'
          height='245'
          alt='Sur mesure'
        />
        <div className='col-start-2 col-end-3 row-start-2 row-end-3 mt-[-75px] ml-[-145px] z-1000 relative'>
          <h3 className='text-[21px] font-[600] text-[#f19551] mb-[14px] mt-[0px]'>
            Sur mesure
          </h3>
          <p className='text-[14px] text-[#363636] mb-[0px] max-w-[215px]'>
            Fini les contrats opaques et les petites lignes. On vous indique
            clairement ce qui est couvert et ce qui ne l'est pas.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] grid-item-5 col-start-2 col-end-4 row-start-4 row-end-6'>
        <Image src='/images/item4.svg' width='329' height='245' alt='RSE' />
        <div className='col-start-2 col-end-3 row-start-2 row-end-3 mt-[-110px] ml-[-65px] z-1000 relative'>
          <h3 className='text-[21px] font-[600] text-[#f19551] mb-[14px] mt-[0px]'>
            RSE
          </h3>
          <p className='text-[14px] text-[#363636] mb-[0px] max-w-[200px]'>
            Les voyageurs de l'équipe sont à votre écoute et vous accompagnent
            car chez nous vous êtes tout sauf des numéros de dossier.
          </p>
        </div>
      </div>
    </section>
  );
};
export default GoodHands;
