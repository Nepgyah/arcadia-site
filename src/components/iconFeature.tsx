import { LucideIcon } from "lucide-react";

export default function IconFeature(
    {
        icon: Icon, title, description
    } : {
        icon: LucideIcon,
        title: string,
        description: string
    }
) {
    return (
        <div className="icon-feature">
            <div className="icon-feature__icon center-b shadow">
                <Icon />
            </div>
            <div className="icon-feature__text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}