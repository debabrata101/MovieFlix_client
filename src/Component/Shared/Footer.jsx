import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
    <img src="https://img.freepik.com/free-vector/cinema-concept_1284-12759.jpg?t=st=1717526889~exp=1717530489~hmac=45aab98be44d39e9dd8d4e11a978c4f202f131fcf45fcda835138e181213d277&w=996" alt="Website Logo" className=" rounded rounded-lg w-8 h-8 mr-2" />
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <AiFillGithub className="fill-current" size={36} />
    </a>
    <p>Copyright © 2024 - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <AiFillTwitterCircle className="fill-current" size={24} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <AiFillFacebook className="fill-current" size={24} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <AiFillInstagram className="fill-current" size={24} />
    </a>
  </nav>
</footer>
  );
};

export default Footer;
