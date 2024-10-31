import { ReactTyped } from "react-typed"

const Typerz = () => {
  return (
    <div>
    <br />

    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
  )
}

export default Typerz
