import React, { Component } from "react";

class Footer extends Component {
  render() {
    return <footer className="p-4 bg-slate-800 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline" target="_blank">Movie app</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
          <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-gray-400">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
        </li>
        <li>
          <a href="#" className="text-sm text-white hover:underline dark:text-gray-400">Contact</a>
        </li>
      </ul>
    </footer>
  }
}

export default Footer;