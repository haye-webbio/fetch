import fetch from "node-fetch";
import { FormData } from "formdata-node";

const test = async () => {
  try {
    const result = await fetch(
      "https://d3irzjarhqj80y.cloudfront.net/IMG_Greendish_57db4f2590_aa7fa03a4d.jpeg"
    );
    const blob = await result.blob();

    const formData = new FormData();
    formData.append("files", blob);

    const upload = await fetch("https://strapi.tst.gelderland.nl/api/upload", {
      method: "POST",
      "Content-Type": "multipart/form-data",
      body: formData,
    });
    const uploadResult = await upload.json();
    console.log(uploadResult);
  } catch (error) {
    console.log(error);
  }
};

test();
