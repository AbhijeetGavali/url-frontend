import React, { FormEvent, useState } from "react";

export default function Url_shrinkner_component() {
  const [full, setFull] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("");
    const email = window.localStorage.getItem("email");

    fetch("https://url-backend.netlify.app/shortUrls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fullUrl: full,
        email,
      }),
    })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="my-4 form-inline">
      <label htmlFor="fullUrl" className="sr-only">
        Url
      </label>
      <input
        required
        placeholder="Url"
        type="url"
        name="fullUrl"
        id="fullUrl"
        className="form-control col mt-2"
        onChange={(e) => setFull(e.currentTarget.value)}
      />
      <button className="btn btn-success mt-4" type="submit">
        Shrink
      </button>
    </form>
  );
}
