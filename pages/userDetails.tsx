import Url_list_components from "../components/url_list_components";
import Url_shrinkner_component from "../components/url_shrinkner_component";
import UserDetails from "../components/userDetails";

export default function Docs() {
  return (
    <>
      <div className="mt-5">
        <div className="auth-inner" style={{ position: "relative" }}>
          <button
            style={{ position: "absolute", top: 10, right: 10 }}
            className="btn btn-danger"
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
          <UserDetails />
        </div>
      </div>
      <div className="mt-5">
        <div
          style={{
            background: "#ffffff",
            boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
            padding: "40px 55px 45px 55px",
            borderRadius: "15px",
            transition: "all 0.3s",
            margin: "0 20%",
          }}
        >
          <h1>URL Shrinker</h1>
          <h2>Shrink your url with us @sicrew.in</h2>
          <Url_shrinkner_component />
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{
            background: "#ffffff",
            boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
            padding: "40px 55px 45px 55px",
            borderRadius: "15px",
            transition: "all 0.3s",
            margin: "0 20%",
          }}
        >
          <Url_list_components />
        </div>
      </div>
    </>
  );
}
