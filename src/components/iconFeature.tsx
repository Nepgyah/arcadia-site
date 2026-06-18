import { LucideIcon } from "lucide-react";

export default function IconFeature(
    {
        icon: Icon, title, description = null
    } : {
        icon: LucideIcon,
        title: string,
        description: string | null
    }
) {
    return (
        <div className="icon-feature">
            <div className="icon-feature__icon center-b shadow">
                <Icon />
            </div>
            <div className="icon-feature__text">
                <h3>{title}</h3>
                {
                    description && <p>{description}</p>
                }
            </div>
        </div>
    )
}