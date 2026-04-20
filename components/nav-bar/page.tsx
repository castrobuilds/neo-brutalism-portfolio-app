export default function NavBar() {
  return (
    <header className="flex justify-between items-center py-5 mb-12 sticky top-0 z-10 ">
      <div>LOGO</div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
