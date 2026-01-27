import { Search, MapPin, Calendar, Menu, User } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import headerbg from "../assets/header.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Concerts",
    "Sports",
    "Arts, Theater & Comedy",
    "Family",
    "Cities",
  ];

  return (
    <div>
      {/* 🔲 TOP BAR — BLACK */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">
          {/* Left: Flag */}
          <div className="flex items-center space-x-2">
            <svg
              fill="none"
              viewBox="0 0 512 512"
              width="1.5em"
              height="1.5em"
              aria-hidden="true"
              class="sc-fc75cc60-5 lbOkgz"
            >
              <path
                fill="#FFF"
                d="M503.2 322.8c5.7-21.3 8.8-43.7 8.8-66.8l-8.8-66.8a254.6 254.6 0 0 0-28.8-66.8l-59-66.7A255 255 0 0 0 256 0h-.2A255 255 0 0 0 96.6 55.7l-59 66.7a254.6 254.6 0 0 0-28.8 66.8L0 256v.1c0 23 3 45.4 8.8 66.7l28.8 66.8a257.3 257.3 0 0 0 59 66.7L256 512l159.4-55.7a257.3 257.3 0 0 0 59-66.7z"
              ></path>
              <path
                fill="#D80027"
                d="M503.2 189.2c5.7 21.3 8.8 43.7 8.8 66.8H0c0-23.1 3-45.5 8.8-66.8zM415.4 55.7a257.3 257.3 0 0 1 59 66.7H37.6a257.3 257.3 0 0 1 59-66.7zm59 333.9c12.6-20.6 22.4-43 28.8-66.8H8.8a254.6 254.6 0 0 0 28.8 66.8zm-59 66.7H96.6A255 255 0 0 0 255.8 512h.4a255 255 0 0 0 159.2-55.7"
              ></path>
              <path
                fill="#0052B4"
                d="M0 245.6A256 256 0 0 1 256 0v256H0z"
              ></path>
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M109.5 46a256 256 0 0 1 26.2-16l1 3h27.8L142 49.2l8.7 26.6L128 59.5l-22.6 16.4 8.6-26.6zm-80 90.4c6-11.1 12.7-21.8 20.1-32l3.8 11.7h28l-22.7 16.4 8.7 26.6-22.6-16.4L22.2 159l7.4-22.7Zm181.7-130 8.6 26.5h28L225 49.3l8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6L174.7 33h27.9l8.6-26.5ZM128 89.6l8.6 26.5h28l-22.7 16.4 8.7 26.6-22.6-16.4-22.6 16.4 8.6-26.6-22.5-16.4h27.9zm91.8 26.5-8.6-26.5-8.6 26.5h-28l22.7 16.4-8.7 26.6 22.6-16.4 22.6 16.4-8.7-26.6 22.6-16.4zm-175 56.7 8.6 26.5h28l-22.7 16.4 8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6-22.6-16.4h27.9zm91.8 26.5-8.6-26.5-8.6 26.5h-28l22.6 16.4-8.6 26.6 22.6-16.4 22.6 16.4-8.7-26.6 22.6-16.4zm74.6-26.5 8.6 26.5h28L225 215.7l8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6-22.6-16.4h27.9l8.6-26.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-white text-sm">🇺🇸</span>
          </div>

          {/* Right: Links */}
          <div className="flex items-center space-x-6">
            <a className="hover:text-gray-300">Hotels</a>
            <a className="hover:text-gray-300">Sell</a>
            <a className="hover:text-gray-300">Gift Cards</a>
            <a className="hover:text-gray-300">Help</a>
            <a className="hover:text-gray-300">VIP</a>
            <span className="text-gray-400 text-xs">
              PayPal Preferred Payments Partner
            </span>
          </div>
        </div>
      </div>

      {/* 🔵 MAIN NAV BAR */}

      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Left: Hamburger on mobile + Logo */}
          <div className="flex items-center space-x-3">
            {/* Hamburger menu */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <img src={logo} alt="Ticketmaster Logo" className="h-10 w-auto" />
          </div>

          {/* Nav for desktop */}
          <nav className="hidden md:flex space-x-6 font-medium items-center">
            {navItems.map((item) => (
              <a key={item} className="hover:text-blue-200">
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Person icon + Sign in */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center hover:text-blue-200 space-x-2">
              <User size={20} />
              <span className="hidden md:inline">Sign In/Register</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🔵 SEARCH SECTION */}
      <div className="bg-blue-600 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main container */}
          <div className="flex flex-col lg:flex-row">
            {/* Top row: Location + Dates (always side by side) */}
            <div className="flex flex-1">
              {/* Location */}
              <div className="relative flex-1 border border-gray-300">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="City or Zip Code"
                  className="w-full pl-10 pr-4 py-3  focus:outline-none text-gray-900"
                />
              </div>

              {/* Dates */}
              <div className="relative flex-1 border-t border-b border-r border-gray-300">
                <Calendar
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select className="w-full pl-10 pr-4 py-3 focus:outline-none text-gray-900">
                  <option>All Dates</option>
                  <option>Today</option>
                  <option>This Weekend</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>

            {/* Search input */}
            <div className="relative flex lg:mt-0 lg:flex-1 border border-gray-300">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Artist, Event or Venue"
                className="w-full pl-10 pr-4 py-3 rounded-none focus:outline-none text-gray-900"
              />
              <button className="bg-blue-800 text-white px-6 rounded-r-lg hover:bg-blue-900">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 HERO SECTION */}
      <header
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${headerbg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-7xl px-16 flex items-center h-full">
          <div className="max-w-lg text-white text-left pl-4 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">Lindsey Stirling</h1>
            <p className="text-lg mb-6">Meet Her as a VIP</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold">
              Find Tickets
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
