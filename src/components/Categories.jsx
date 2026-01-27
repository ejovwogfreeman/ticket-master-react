import { Music, Trophy, Theater, Laugh, Sparkles, Users } from "lucide-react";

const categories = [
  {
    name: "Music",
    icon: Music,
    color: "from-blue-500 to-cyan-500",
    count: "1,250+ events",
  },
  {
    name: "Sports",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    count: "850+ events",
  },
  {
    name: "Theater",
    icon: Theater,
    color: "from-pink-500 to-rose-500",
    count: "420+ events",
  },
  {
    name: "Comedy",
    icon: Laugh,
    color: "from-yellow-500 to-orange-500",
    count: "320+ events",
  },
  {
    name: "Festivals",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    count: "280+ events",
  },
  {
    name: "Family",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    count: "560+ events",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find the perfect event for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="group relative overflow-hidden rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-3 transform group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
