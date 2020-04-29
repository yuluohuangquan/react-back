import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  return (
    <>
      <p>{"登录页面"}</p>
      <Button
        onClick={() => {
          history.push("/test");
        }}
      >
        {"去测试页面"}
      </Button>
    </>
  );
};
