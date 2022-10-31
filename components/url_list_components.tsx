import React, { useEffect, useState } from "react";

export default function Url_list_components() {
  const [shortUrls, setShortUrls] = useState<
    { full: string; short: string; clicks: number }[]
  >([]);

  console.log(shortUrls);
  useEffect(() => {
    fetch("https://url-backend.netlify.app/shorturls", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: window.localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "userData");
        setShortUrls(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (url: string) => {
    fetch("https://url-backend.netlify.app/shorturls", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        short: url,
        email: window.localStorage.getItem("email"),
      }),
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {shortUrls.map((shortUrl) => {
            return (
              <tr>
                <td>
                  <a href={shortUrl.full} target="_blank" rel="noreferrer">
                    {shortUrl.full}
                  </a>
                </td>
                <td>
                  <a
                    href={"https://url-backend.netlify.app/s/" + shortUrl.short}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shortUrl.short}
                  </a>
                </td>
                <td> {shortUrl.clicks}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={() => handleDelete(shortUrl.short)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
