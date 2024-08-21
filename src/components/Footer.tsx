import { Github, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="py-10 flex justify-center items-center border-t-2 border-black/80 mt-20 gap-5">
      <div className="">&#169; 2024 NourDoesCode</div>
      <a href="https://github.com/NourDoesCode">
        <Github className="hover:bg-black hover:text-white h-9 w-9 rounded-lg" />
      </a>
      <a href="https://x.com/NourEdit">
        <Twitter className="hover:bg-black hover:text-white h-9 w-9 rounded-lg" />
      </a>
    </footer>
  );
}

export default Footer;
