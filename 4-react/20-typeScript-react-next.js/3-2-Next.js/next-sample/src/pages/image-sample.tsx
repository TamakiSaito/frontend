import { NextPage } from 'next' 
import Image from 'next/image'

const ImageSample: NextPage = () => { 
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      {/* 通常のimgタグを使用して画像を表示 */}
      <img src="/images/ocean.jpeg" alt="海の画像" />
      <p>Imageコンポーネントで表示した場合</p>
      {/* Imageコンポーネントを使用して表示 */}
      <Image 
        src="/images/ocean.jpeg"
        alt="海の画像" 
        width={500}
        height={500}
      />
      <p>imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  )
}

export default ImageSample
