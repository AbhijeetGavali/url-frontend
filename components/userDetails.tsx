import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function UserDetails() {
  const [userData, setUserData] = useState<{
    fname: string;
    lname: string;
    email: string;
  }>({
    fname: "",
    lname: "",
    email: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (window.localStorage.getItem("token"))
      fetch("https://url-backend.netlify.app/userData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          window.localStorage.setItem("email", data.data.email);
          setUserData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    else router.push("/");
  }, []);

  return (
    <div>
      Name:
      <div>
        {userData.fname} {userData.lname}
      </div>
      Email: <div>{userData.email}</div>
    </div>
  );
}
