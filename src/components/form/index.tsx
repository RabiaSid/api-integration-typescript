import React from "react";
import Button from "../button";
import InputField from "../input-field";

export default function Form() {
  return (
    <>
      <InputField label="Name" />
      <InputField label="Email" />
      <InputField label="Body" />
      <Button
        variant="contained"
        color="primary"
        //   onClick={() => navigate("/product-form")}
        label="Submit"
      />
    </>
  );
}
