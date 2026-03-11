import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div id="wrapper">
                <div id="logo">
                    <Link href={'/'}>
                        <img src="/logos/arcadia-logo.png" alt="" />
                    </Link>
                </div>
                <div></div>
                <div id="cta">
                    <a>
                        <Button className="primary">
                            Visit Platform
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    )
}