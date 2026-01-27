import { Calendar, MapPin, Heart } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "Fri, Jul 15 • 7:00 PM",
    venue: "Madison Square Garden",
    location: "New York, NY",
    price: "$89",
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Music",
  },
  {
    id: 2,
    title: "NBA Finals - Game 7",
    date: "Sun, Jun 18 • 8:30 PM",
    venue: "Crypto.com Arena",
    location: "Los Angeles, CA",
    price: "$250",
    image:
      "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sports",
  },
  {
    id: 3,
    title: "Hamilton - Broadway Show",
    date: "Sat, Aug 5 • 2:00 PM",
    venue: "Richard Rodgers Theatre",
    location: "New York, NY",
    price: "$150",
    image:
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Theater",
  },
  {
    id: 4,
    title: "Stand-Up Comedy Night",
    date: "Thu, Jul 20 • 9:00 PM",
    venue: "Comedy Cellar",
    location: "New York, NY",
    price: "$45",
    image:
      "https://images.pexels.com/photos/3771815/pexels-photo-3771815.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Comedy",
  },
  {
    id: 5,
    title: "Rock Concert Experience",
    date: "Sat, Sep 9 • 8:00 PM",
    venue: "The Forum",
    location: "Inglewood, CA",
    price: "$125",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Music",
  },
  {
    id: 6,
    title: "MLB All-Star Game",
    date: "Tue, Jul 11 • 7:00 PM",
    venue: "T-Mobile Park",
    location: "Seattle, WA",
    price: "$180",
    image:
      "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sports",
  },
  {
    id: 7,
    title: "International Football Cup Final",
    date: "Sun, Oct 1 • 6:00 PM",
    venue: "Wembley Stadium",
    location: "London, UK",
    price: "$200",
    image:
      "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sports",
  },
  {
    id: 8,
    title: "Live Musical Theatre Showcase",
    date: "Fri, Aug 25 • 7:30 PM",
    venue: "Sydney Opera House",
    location: "Sydney, AU",
    price: "$140",
    image:
      "https://images.pexels.com/photos/713144/pexels-photo-713144.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Musical",
  },
  {
    id: 9,
    title: "Grand Slam Tennis Open",
    date: "Sat, Sep 16 • 1:00 PM",
    venue: "Arthur Ashe Stadium",
    location: "New York, NY",
    price: "$170",
    image:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sports",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured Events
            </h2>
            <p className="text-gray-600 text-lg">
              Don't miss out on these incredible experiences
            </p>
          </div>
          <button className="hidden sm:block text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                    <Heart size={18} className="text-gray-700" />
                  </button>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    <span className="line-clamp-1">
                      {event.venue}, {event.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {event.price}
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="sm:hidden text-blue-600 hover:text-blue-700 font-semibold text-lg">
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
}
