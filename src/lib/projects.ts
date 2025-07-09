export const Projects:Projects[] = [
    {
        title:"Wealthify",
        description:"AI Based Finance Platform.",
        image:"/Wealthify.png",
        techUsed:["Next.js" , "Prisma","PostgreSQL" , "Clerk" , "Gemini AI" , "Inngest" , "Arcjet", "Tailwind CSS"],
        liveLink:"https://wealthify-6x1a.onrender.com/",
        githubLink:"https://github.com/nishitpatel-dev/Wealthify"
    },
    {
        title:"FlashTalk",
        description:"A Web-Based Real-Time Chat Platform.",
        image:"/Flashtalk.png",
        techUsed:["React.js" , "Socket.io", "Redux Toolkit", "Cloudinary", "Express.js", "Material UI", "MongoDB", "Mongoose"],
        liveLink:"https://flash-talk.vercel.app/",
        githubLink:"https://github.com/nishitpatel-dev/FlashTalk"
    },
    {
        title:"CoinLive",
        description:"A web app that provides real-time cryptocurrency prices along with a list of exchanges linked to their official websites.",
        image:"/Coinlive.png",
        techUsed:["React.js" , "Chart.js" , "Framer-motion" ,"React Icons" , "Axios"],
        liveLink:"https://coinlive.vercel.app/",
        githubLink:"https://github.com/nishitpatel-dev/CoinLive"
    },
    {
        title:"BiteMate",
        description:"A web-based food ordering platform that lets users add items to cart, checkout, and track order details in one place.",
        image:"/Bitemate.png",
        techUsed:["React.js", "Express.js", "Context API" ,"Bootstrap" , "MongoDB", "Mongoose"],
        liveLink:"https://bitemate.vercel.app/",
        githubLink:"https://github.com/nishitpatel-dev/BiteMate"
    },
    
]

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}