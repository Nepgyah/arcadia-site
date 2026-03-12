'use client';

import { Button, CloseButton, Drawer, IconButton } from "@chakra-ui/react";
import { Hamburger } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleLinkClick = (url : string) => {
        router.push(url)
        setIsOpen(false)
    }
    return (
        <nav>
            <div id="wrapper">
                <div className="mobile-only"></div>
                <div id="logo">
                    <Link href={'/'}>
                        <img src="/logos/arcadia-logo.png" alt="" />
                    </Link>
                </div>
                <div className="mobile-only">
                    <Drawer.Root size={'full'} open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
                        <Drawer.Trigger asChild>
                            <IconButton id="burger" variant={'plain'} size={'lg'}>
                                <Hamburger />
                            </IconButton>
                        </Drawer.Trigger>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title>
                                        <Link href='/' onClick={() => handleLinkClick('/')}>
                                            <img src={'/logos/arcadia-logo.png'} />
                                        </Link>
                                    </Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                        <Button className="text-link" variant={'plain'} onClick={() => handleLinkClick('/')}>
                                            Home
                                        </Button>
                                    <a href="https://arcadia-platform.vercel.app" target="_blank">
                                        <Button className="primary">
                                            Visit Platform
                                        </Button>
                                    </a>
                                </Drawer.Body>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton size="lg" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Drawer.Root>
                </div>
                <div id="cta" className="desktop-only">
                    <a href="https://arcadia-platform.vercel.app" target="_blank">
                        <Button className="primary">
                            Visit Platform
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    )
}