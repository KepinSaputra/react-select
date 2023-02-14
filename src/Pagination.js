import React from "react"

export default function Pagination({ goToNextPageUrl, goToPreviousPageUrl }) {
  return (
    <>
      <div>
        <button onClick={goToPreviousPageUrl}>Previous</button>

        <button onClick={goToNextPageUrl}>Next</button>
      </div>
    </>
  )
}
