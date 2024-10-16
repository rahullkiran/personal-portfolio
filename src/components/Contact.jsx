import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-thin text-cyan-400">G
        <span className="text-neutral-50">et in Touch</span>
        </h2>
        <div className="text-center tracking-tighter">
         <p className="my-4">{CONTACT.address}</p>
         <a href="#" className="border-b">{CONTACT.email}</a>

        </div>
    </div>
  )
}

export default Contact
