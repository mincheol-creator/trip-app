import React from "react";

import http from "http";

import "../scss/styles.scss";
import API from "../API";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const KaKao = props => {
  React.useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    var urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    API.getAccessKey(code).then(res => {
      console.log(res);
      API.getUserInfo(res.data.access_token);
      cookies.set("token", res.data.access_token);

      var options = {
        host: "kapi.kakao.com",
        path: "/v2/user/me",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${res.data.access_token}`
        }
      };

      var httpreq = http.request(options, function(response) {
        response.setEncoding("utf8");
        httpreq.on("error", error => {
          console.log(error);
        });
        response.on("data", function(chunk) {
          console.log("body: " + chunk);
        });
        response.on("end", function() {
          res.send("ok");
        });
      });
      //httpreq.write(data);
      httpreq.end();
      http.request("");
    });
  };

  const handleClick = () => {
    API.getKakaoLogout(cookies.get("token"));
  };

  return (
    <div>
      <button onClick={handleClick}>카카오 로그아웃</button>
    </div>
  );
};

export default KaKao;
