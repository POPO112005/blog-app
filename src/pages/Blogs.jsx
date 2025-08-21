import Searchbar from "../components/Searchbar"
import Articles from "../data/Articles"
import { Link } from "react-router";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredArticles(Articles);
    } else {
      const filtered = Articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.content.toLowerCase().includes(search.toLowerCase()) ||
        article.author.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [search]);

  // Initialize with all articles
  useEffect(() => {
    setFilteredArticles(Articles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Blog Articles
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of stories, recipes, and travel experiences
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <Searchbar onChange={handleSearch} />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {search ? `Found ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''} for "${search}"` : `${filteredArticles.length} articles available`}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((item) => (
              <Link 
                to={`/blog/${item.id}`} 
                key={item.id}
                className="group block"
              >
                <article className="bg-background rounded-xl shadow-sm hover:shadow-lg border border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {item.author}
                      </span>
                    </div>
                    
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h2>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {item.content.substring(0, 150)}...
                    </p>
                    
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Read more
                      <svg 
                        className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse all articles
            </p>
            <button 
              onClick={() => setSearch("")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;