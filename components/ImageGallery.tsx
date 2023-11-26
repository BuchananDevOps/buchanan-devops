import { useState } from "react"

import { ArrowLeft, ArrowRight } from "./icons"

type ImageGalleryProps = {
  images: string[] // Array of image URLs
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const showNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const showPreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div>
      <div className="flex flex-col flex-shrink-0 max-h-[70rem] mb-4">
        {images.map((image, index) => (
          <img
            key={index}
            alt={`${index + 1}`}
            className="w-[600px] h-[23rem] object-cover object-top cursor-pointer mb-4 rounded-xl shadow-xl ring-1 ring-slate-900/5"
            src={image}
            onClick={() => openModal(index)}
            onKeyDown={() => openModal(index)}
          />
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <img
            alt={`Image ${currentImageIndex + 1}`}
            className="modal-image"
            src={images[currentImageIndex]}
          />
          <div className="modal-buttons">
            <button
              className=" flex justify-center -mb-9 z-30 items-center h-18 px-7 rounded-md bg-[rgba(9,9,11,0.97)] hover:bg-[rgba(9,9,11,0.85)] bg-[image:radial-gradient(221.02%_101.62%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_78.73%)] shadow-[0_2px_20px_rgba(0,0,0,0.5),0_20px_28px_rgba(0,0,0,0.4),inset_0_0.5px_0_rgba(153,253,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
              title="Previous"
              onClick={showPreviousImage}
            >
              <ArrowLeft className=" stroke-white h-8 w-8" />
            </button>
            <button
              className=" flex justify-center -mb-9 z-30 items-center h-18 px-7 rounded-md bg-[rgba(9,9,11,0.97)] hover:bg-[rgba(9,9,11,0.85)] bg-[image:radial-gradient(221.02%_101.62%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_78.73%)] shadow-[0_2px_20px_rgba(0,0,0,0.5),0_20px_28px_rgba(0,0,0,0.4),inset_0_0.5px_0_rgba(153,253,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
              onClick={showNextImage}
            >
              <ArrowRight className="stroke-white h-8 w-8" />
            </button>
          </div>
        </div>
      )}
      <style jsx>
        {`
          /* Add your CSS styles here */
          .image-grid {
            display: flex;
            flex-wrap: wrap;
          }

          .gallery-thumbnail {
            width: 400px;
            height: auto;
            object-fit: cover;
            margin: 5px;
            cursor: pointer;
          }

          .modal {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            overflow: hidden;
            z-index: 999;
          }

          .modal-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .close-button {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 25px;
            color: #fff;
            cursor: pointer;
          }

          .modal-buttons {
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 100%;
            bottom: 50%;
            padding: 0 15px;
          }
        `}
      </style>
    </div>
  )
}

export default ImageGallery
