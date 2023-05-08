import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="row">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/repositories">Repositories</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
