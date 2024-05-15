"use client";

import { useRef, useState } from "react";

interface Props {
  input: string;
  uploadedImage: (image: string) => void;
}

const UploadImageInput: React.FC<Props> = ({ input, uploadedImage }) => {
  //to handle dom manipulation for image upload
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  //function to initiate file upload
  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //to store uploaded image
  const handleUploadImage = (image: string) => {
    if (image) {
      //console.log(image)
      uploadedImage(image);
    }
  };

  //converting the uploaded image into base64
  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        //console.log(reader.result);
        if (reader.result && typeof reader.result === "string") {
          setPreviewImg(reader.result);
          handleUploadImage(reader.result);
        }
      };
      reader.onerror = (error) => {
        console.log("FileReader Error: ", error);
      };
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-[1.2vw] text-nowrap text-[#DA3545] font-medium">
          {input}
        </div>
        <div className="">
          {previewImg == "" || previewImg == null ? (
            <div className="">
              {/* Image Upload */}
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                className="hidden"
                onChange={(e) => convertToBase64(e)}
              />

              {/* Image Upload Label */}
              <div
                onClick={() => handleUploadClick()}
                className="w-[10vw] h-[10vw] border border-[#12121215] bg-[#E5E5E540]  rounded-md flex flex-col items-center justify-center gap-2 py-4 cursor-pointer"
              >
                <img
                  src="/upload-cloud.svg"
                  alt="upload icon"
                  className="w-[2.5vw]"
                />
                <div className="text-[1vw]">Click to upload</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between ">
              {/* To Preview the Upload Image */}
              <img src={previewImg}  className="h-[10vw] w-[10vw] rounded-md" />
              <div>
                <button onClick={()=>setPreviewImg("")} className="px-[1vw] py-[0.5vw] text-[1vw] rounded-lg bg-[#DA3545] text-[#ffffff]">
                  Re-upload
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default UploadImageInput;
