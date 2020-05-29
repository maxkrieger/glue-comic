import React from "react"
import { Link } from "gatsby"

const sty = {
  display: "inline-block",
  backgroundColor: "#614AEC",
  padding: "1em",
  margin: "1em",
  borderRadius: "10px",
  color: "#FFFFFF",
  fontFamily: "sans-serif",
}

const Navs = ({ left, right }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    {left && (
      <Link to={left === 1 ? "/" : `page-${left}`}>
        <div style={{ ...sty, opacity: 0.7 }}>{"←"} previous</div>
      </Link>
    )}
    {right && (
      <Link to={`page-${right}`}>
        <div style={sty}>next {"→"}</div>
      </Link>
    )}
  </div>
)

export default Navs
