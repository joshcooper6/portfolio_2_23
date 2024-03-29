import vinylphile from './assets/vinylphile.png'

const socials = [
  {
    id: "email",
    icon: "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z",
    src: "mailto:jjdcooper6@gmail.com",
  },
  {
    id: "linkedin",
    icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    src: "https://www.linkedin.com/in/joshcooper6/",
  },
  {
    id: "github",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    src: "https://github.com/joshcooper6",
  },
  {
    id: "twitter",
    icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    src: "https://twitter.com/jocoscript",
  },
];

const projects = [
  {
    title: "Café Inventory",
    bgImage:
      "https://jjdcportfolio.s3.us-west-2.amazonaws.com/Screenshot+2023-01-15+at+8.55.38+PM.png",
    desc: `Developed and designed an inventory management web application for a small business. 
    Automatically stores and displays data based on the day of the week and user input. 
    Implemented user authentication with JWT for enhanced security.
    Offered seamless integration with third-party APIs and services.
    Utilized TailwindCSS for front-end design and development, delivering a clean and user-friendly interface.
    Utilized Git and GitHub for version control and collaboration throughout the development process.`,
    stack: "React.js, Node.js, MongoDB, JWT, Express, Firebase",
    path: "https://ucl-portal.web.app",
    featured: true,
  },
  {
    title: "Remembering Ian",
    bgImage:
      "https://jjdcportfolio.s3.us-west-2.amazonaws.com/Screenshot+2023-02-12+at+11.32.07+AM.png",
    desc: `Created a single-page static application in memory of a beloved uncle who had recently passed away.
    Designed a clean, minimal, and modern interface to honor the memory of my uncle and provide a pleasant user experience for family and friends.
    Hosted the application files on AWS S3 and Firebase for easy accessibility and efficient performance.`,
    stack: "React.js, Node.js, AWS S3, Firebase",
    path: "https://iandebright-bd393.web.app",
    featured: true,
  },
  {
    title: "Vinylphile",
    bgImage:
      vinylphile,
    desc: `Developing a direct-to-consumer e-commerce platform for selling vinyl records
    Implemented a modern front-end using Vite.js, React.js and Tailwind CSS for an engaging and user-friendly experience.
    Built a robust and scalable back-end using Node.js and Google Cloud.
    Integrated Stripe for secure and seamless payment processing, ensuring the safety and security of customer transactions.
    Developed features for inventory management, customer management, and order tracking for smooth and efficient operations.
    Utilized Amazon S3 for static hosting to improve website performance and scalability.
    Utilized Git and GitHub for version control and collaboration throughout the development process.`,
    stack: "React.js, Node.js, Google Cloud, Stripe",
    path: "https://vinylphile-56bf9.web.app",
    featured: true,
  },
];

const about = `

Although I have a degree in psychology, I discovered my love for coding in 2020 and have been freelancing ever since. I've worked with a variety of technologies as you'll be able to see with my projects. 

I'm currently working in third-wave coffee, which helped me develop a keen eye for detail and the ability to approach problems from different angles.

I'm passionate about writing high-quality and maintainable code, staying up-to-date with the latest tech trends, and working collaboratively with team members. If you're looking for a laid-back yet hardworking developer to bring your ideas to life, let's chat!`

export { socials, projects, about };
