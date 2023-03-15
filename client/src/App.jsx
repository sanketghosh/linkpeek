import React, { useState } from "react";
import axios from "axios";
import { Error, Form, Header, LinkPreviewCard } from "./components";

const App = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [linkPreview, setLinkPreview] = useState(null);
  const [remove, setRemove] = useState(false);

  function removeCardHandler() {
    setRemove(true);
    setUrl("");
  }

  const urlSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/link?url=${url}`
      );
      setLinkPreview(response.data);
      setError(null);
    } catch (error) {
      setLinkPreview(null);
      setError(
        "Oops! Failed to fetch data, check your internet connection or refresh the page and try again"
      );
    }
  };

  return (
    <main className='pb-10'>
      <Header />
      <h1 className='text-left md:text-center text-lg md:text-xl text-lime-500 font-medium xl:font-semibold'>
        A tool for previewing your link before sharing
      </h1>

      <Form url={url} setUrl={setUrl} urlSubmitHandler={urlSubmitHandler} />

      <section className='flex items-center justify-center px-3 mt-3 lg:mt-5'>
        {!remove && (
          <>
            {linkPreview && (
              <LinkPreviewCard
                linkPreview={linkPreview}
                removeCardHandle={removeCardHandler}
              />
            )}
          </>
        )}
        {error && <Error error={error} />}
      </section>
    </main>
  );
};

export default App;
