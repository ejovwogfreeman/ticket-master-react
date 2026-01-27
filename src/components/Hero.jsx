import { Search, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Find Your Next Experience
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
            Discover live events, concerts, sports, and more
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for events, artists..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none">
                <option>Any Date</option>
                <option>Today</option>
                <option>This Weekend</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.02]">
            Search Events
          </button>
        </div>
      </div>
    </div>
  );
}
