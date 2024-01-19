import React from "react"
import pictures from "../../assets/menu/pictures.png"

const ImageSlider = () => {
  return (
    <div className="relative">
      <img
        src={pictures}
        className="h-[230px] w-[44.65277777777778vw] rounded-2xl object-cover  "
        alt="logo"
      />
      <div className="absolute bottom-4 left-[50%] mx-auto flex translate-x-[-50%] gap-2">
        {[1, 2, 3].map((v, i) => (
          <div
            key={i}
            className={`h-[5px] w-[46px] rounded-[4px] bg-grey ${
              i === 0 && "bg-primary"
            }`}></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
