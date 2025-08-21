const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate student at <span className="text-primary font-semibold">Bangkok University</span>, 
                  studying in the Information Technology and Innovation school. My journey in tech is driven by 
                  curiosity and a love for creating digital solutions.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Web applications fascinate me because they bridge the gap between creative design and 
                  functional programming. I'm always eager to learn about emerging technologies and stay 
                  updated with the latest trends in the tech world.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of teamwork and collaboration. Working with others not only enhances 
                  the quality of projects but also provides opportunities for mutual learning and growth.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'React', 'JavaScript', 'UI/UX Design', 'Team Collaboration', 'New Technologies'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl text-white">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                    <p className="text-sm text-muted-foreground">Current Studies</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Information Technology and Innovation<br/>
                  <span className="text-primary font-medium">Bangkok University</span>
                </p>
              </div>

              {/* Goals Card */}
              <div className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl text-white">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Goals</h3>
                    <p className="text-sm text-muted-foreground">Looking Forward</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Seeking opportunities to apply my skills in real-world projects and continue growing as a developer.
                </p>
              </div>

              {/* Values Card */}
              <div className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl text-white">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Values</h3>
                    <p className="text-sm text-muted-foreground">Core Beliefs</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Collaboration, continuous learning, and building meaningful connections through technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Let's Connect & Create Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new ideas, collaborate on projects, or simply chat about technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blogs" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Read My Blogs
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="px-8 py-3 border border-border bg-background text-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
