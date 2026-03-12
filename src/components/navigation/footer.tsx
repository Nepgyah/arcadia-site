import { IconButton } from "@chakra-ui/react";

export default function Footer() {
    return (
        <footer>
            <div id="wrapper">
                <div id="overview">
                    <img src="/logos/arcadia-logo.png" alt="" />
                    <p>Arcadia is a pretend platform created to practice and learn about full stack development using a subject that is more personal to me. Thanks for stopping by!</p>
                </div>
                <div id="links"></div>
                <div id="contact">
                    <h2>Get In Touch</h2>
                    <div>
                        <a href="https://github.com/Nepgyah" target="_blank">
                            <IconButton asChild>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/apawell/" target="_blank">
                            <IconButton asChild>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </IconButton>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}