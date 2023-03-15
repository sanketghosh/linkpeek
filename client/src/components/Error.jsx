const Error = ({ error }) => {
  return (
    <div className='py-3 px-4 w-full sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-sm text-center bg-red-500'>
      <h1 className='text-xs lg:text-base font-medium text-zinc-100'>
        {error}
      </h1>
    </div>
  );
};

export default Error;
