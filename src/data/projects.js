export const projects = [
    {
        id: "chat-realtime",
        name: "Real Time Chat",
        keys: {
            summary: "chatSummary",
        },
        preview: null,
        links: [
            { labelKey: "backendRepo", url: "https://github.com/Tomilomi/chat-backend" },
            { labelKey: "frontendRepo", url: "https://github.com/Tomilomi/chat-react-front" },
        ],
        tags: ["Node.js", "Express", "React", "Sequelize", "SQL Server", "JWT", "Multer"],
    },
    {
        id: "chat-dotnet",
        name: "Chat Collab",
        keys: {
            summary: "dotnetSummary",
        },
        preview: "https://raw.githubusercontent.com/Tomilomi/chat-collab-react/main/assets/login.png",
        links: [
            { labelKey: "backendRepo", url: "https://github.com/Tomilomi/chat-in-realtime-collab" },
            { labelKey: "frontendRepo", url: "https://github.com/Tomilomi/chat-collab-react" },
            { labelKey: "demoLabel", url: "https://chat-collab-frontend.onrender.com" },
        ],
        tags: [".NET", "ASP.NET Core", "SignalR", "PostgreSQL", "EF Core", "JWT", "React"],
    },
    {
        id: "daily-cats",
        name: "Daily Cats",
        keys: {
            summary: "catsSummary",
        },
        preview: "https://raw.githubusercontent.com/Tomilomi/daily-cat/main/public/preview-darkmode.png",
        links: [
            { labelKey: "repoLabel", url: "https://github.com/Tomilomi/daily-cat" },
        ],
        tags: ["Node.js", "Express", "CORS"],
    },
];