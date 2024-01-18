import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#3c3939"
    foregroundColor="#675f5f"
    {...props}
  >
    <rect x="5" y="16" rx="2" ry="2" width="341" height="170" /> 
    <rect x="5" y="217" rx="2" ry="2" width="162" height="87" /> 
    <rect x="185" y="217" rx="2" ry="2" width="162" height="87" /> 
    <rect x="5" y="316" rx="2" ry="2" width="164" height="87" /> 
    <rect x="185" y="316" rx="2" ry="2" width="161" height="87" />
  </ContentLoader>
)

export default MyLoader
