
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to My
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Blog Website
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover amazing stories, delicious recipes, and beautiful travel experiences
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img 
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105" 
                src="https://f.ptcdn.info/330/010/000/1380474806-o.jpg" 
                alt="Blog hero image" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/blogs" 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Blogs
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 border border-border bg-background text-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What You'll Find Here
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my thoughts, experiences, and discoveries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">🍜</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Food & Recipes</h3>
              <p className="text-muted-foreground">
                Authentic Thai recipes and culinary adventures
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">✈️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Travel Stories</h3>
              <p className="text-muted-foreground">
                Beautiful destinations and travel experiences
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Life & Thoughts</h3>
              <p className="text-muted-foreground">
                Personal insights and life experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home