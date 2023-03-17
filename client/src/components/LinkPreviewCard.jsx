import { MdDeleteOutline } from "react-icons/md";

const LinkPreviewCard = ({ linkPreview, removeCardHandle, url }) => {
  return (
    <div className='flex flex-col items-center justify-start gap-4 bg-neutral-50 py-3 md:px-4 lg:px-5 px-2 w-full sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-md text-zinc-800 border shadow-lg shadow-zinc-400'>
      {linkPreview.image && (
        <a href={url} target='_blank' className='w-full'>
          <img
            src={linkPreview.image}
            alt={linkPreview.title}
            className='border border-neutral-600 rounded-sm lg:rounded-md object-cover h-64 w-full hover:shadow-lg shadow-zinc-600'
          />
        </a>
      )}
      <div className='flex flex-col gap-1.5 w-full'>
        <a
          href={url}
          target='_blank'
          className='text-sm lg:text-base font-medium overflow_text hover:underline'>
          {linkPreview.title}
        </a>
        {linkPreview.description && (
          <p className='text-xs md:text-sm text-zinc-500'>
            {linkPreview.description}
          </p>
        )}
      </div>
      <div
        className='self-end mt-2 p-2 bg-violet-500 hover:bg-violet-600 transition cursor-pointer rounded-full text-zinc-50'
        onClick={removeCardHandle}>
        <MdDeleteOutline className='text-xl lg:text-2xl' />
      </div>
    </div>
  );
};

export default LinkPreviewCard;
