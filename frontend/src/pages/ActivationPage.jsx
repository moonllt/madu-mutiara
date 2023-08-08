import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import { Link } from "react-router-dom";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <div className="center-content">
          <p>Maaf, masa aktivasi kamu telah berakhir. Silahkan daftar kembali!</p>
          <Link to="/sign-up" className="button-link">Ke halaman daftar</Link>
        </div>
      ) : (
          <div className="center-content">
            <p>Berhasil membuat akun! silahkan login untuk masuk ke akunmu</p>
            <Link to="/login" className="button-link">Ke halaman login</Link>
          </div>
      )}
    </div>
  );
};

export default ActivationPage;
