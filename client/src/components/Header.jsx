import { GiLinkedRings } from "react-icons/gi";
const Header = () => {
  return (
    <header className='px-3 py-6 flex justify-start md:justify-center select-none'>
      <div className='flex items-center gap-1 font-montserrat text-lime-500'>
        <GiLinkedRings className='text-xl md:text-2xl xl:text-3xl' />
        <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>
          linkpeek
        </h1>
      </div>
    </header>
  );
};

export default Header;
