import { BsStars } from "react-icons/bs";

export default function Form({ url, setUrl, urlSubmitHandler }) {
  return (
    <section className='mt-3 md:mt-6 flex items-center justify-center px-3 py-3 font-poppins'>
      <form className='flex flex-col gap-3 w-full sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-2/5'>
        <input
          type='text'
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder='Enter the URL you wanna preview'
          className='px-2 py-2.5 rounded-sm border border-zinc-600 focus:outline-lime-500 text-xs md:text-sm xl:text-base placeholder:text-sm placeholder:text-gray-300'
        />
        <button
          type='submit'
          onClick={urlSubmitHandler}
          className='bg-lime-500 hover:bg-lime-600 py-2.5 rounded-sm text-xs md:text-sm xl:text-base font-medium flex items-center justify-center gap-1 text-zinc-800'>
          Surprise Me
          <BsStars className='text-lg lg:text-xl' />
        </button>
      </form>
    </section>
  );
}
