function Top() {
  return (
    <header class="fixed w-full bg-black text-white bg-opacity-75 md:flex md:justify-between">
      <a class="block px-6 py-2 hover:bg-black" href="#top">
        Taylor Le
      </a>
      <nav>
        <ul class="md:flex">
          <li>
            <a class="block px-6 py-2 hover:bg-black" href="#myself">
              Myself
            </a>
          </li>
          <li>
            <a class="block px-6 py-2 hover:bg-black" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="block px-6 py-2 hover:bg-black" href="#people">
              People
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Top;
