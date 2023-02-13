import Account from "@/components/icons/Account"

const AccountButton = () => {
    return(
        <button type="button" className="logo-menu flex flex-col items-center justify-center space-y-2 font-bold">
        <Account />
        <span className="hidden lg:block uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">Compte</span>
      </button>
    )
}
 export default AccountButton