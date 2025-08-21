
const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &#169; {new Date().getFullYear()} Mr.POPO. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a 
              href="/blogs" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Blogs
            </a>
            <a 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
        
        {/* Social Links (Optional) */}
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
