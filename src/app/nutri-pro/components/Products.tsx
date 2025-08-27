// import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our flagship nutrition management solution designed for
            modern businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      (4.9/5 from 50+ clients)
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Nutri Pro
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    The complete nutrition management platform that transforms
                    how diet businesses operate. From meal planning to delivery
                    tracking, Nutri Pro handles it all with precision and
                    intelligence.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">
                      AI-powered meal recommendations
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Smart delivery optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Real-time nutrition tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Customer engagement tools
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>1000+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="h-4 w-4" />
                    <span>99.9% Uptime</span>
                  </div>
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white group"
                  >
                    Try Nutri Pro Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    View Demo
                  </Button>
                </div> */}
              </div>

              <div className="relative bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
                    alt="Nutri Pro Dashboard"
                    className="relative rounded-2xl shadow-2xl w-full h-80 object-cover border border-gray-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm font-medium">
                        Nutri Pro Dashboard
                      </p>
                      <p className="text-gray-300 text-xs">
                        Comprehensive nutrition management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
