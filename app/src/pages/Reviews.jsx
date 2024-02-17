import React from "react"
import TopBar from "../components/generic/TopBar"
import TotalReviews from "../components/reviews/TotalReviews"

const Reviews = () => {
  return (
    <div>
      <TopBar content={"Reviews"} />
      <TotalReviews />
    </div>
  )
}

export default Reviews
