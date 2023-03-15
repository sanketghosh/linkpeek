import { MdDeleteOutline } from "react-icons/md";

const LinkPreviewCard = ({ linkPreview, removeCardHandle }) => {
  return (
    <div className='flex flex-col items-center justify-start gap-4 bg-neutral-700 py-3 px-2 w-full sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-sm text-zinc-100 border border-neutral-600 shadow-md'>
      {linkPreview.image && (
        <img
          src={linkPreview.image}
          alt={linkPreview.title}
          className='border border-neutral-500 rounded-sm object-cover h-64 w-full'
        />
      )}
      <div className='flex flex-col gap-1.5'>
        <h2 className='text-base lg:text-lg font-semibold'>
          {linkPreview.title}
        </h2>
        {linkPreview.description && (
          <p className='text-xs md:text-sm'>{linkPreview.description}</p>
        )}
      </div>
      <div
        className='self-end mt-2 p-2 bg-lime-500 hover:bg-lime-600 transition cursor-pointer rounded-full text-zinc-800'
        onClick={removeCardHandle}>
        <MdDeleteOutline className='text-xl lg:text-2xl' />
      </div>
    </div>
  );
};

export default LinkPreviewCard;
