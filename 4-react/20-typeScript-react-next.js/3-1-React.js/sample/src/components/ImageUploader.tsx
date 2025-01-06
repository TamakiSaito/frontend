'use client';

import React, { useState, useRef } from 'react'
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const onClickText = () => {
    if (inputImageRef.current) {
      inputImageRef.current.click();
    }
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      // ファイルサイズチェック（例: 5MB以下）
      const maxSizeInBytes = 5 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setMessage("ファイルサイズが大きすぎます。5MB以下の画像を選択してください。");
        return;
      }

      // ファイルの型チェック
      if (!file.type.startsWith("image/")) {
        setMessage("画像ファイルのみアップロード可能です。");
        return;
      }

      fileRef.current = file;
      setMessage(`${file.name} が選択されました`);
    }
  };

  const onClickUpload = async () => {
    if (fileRef.current) {
      setMessage("アップロード中...");
      await sleep(UPLOAD_DELAY);
      setMessage(`${fileRef.current.name} が正常にアップロードされました`);
    } else {
      setMessage("アップロードするファイルを選択してください。");
    }
  };

  return (
    <div>
      <p style={{ textDecoration: "underline", cursor: "pointer" }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ display: "none" }}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;