import type { UserProfileCardProps } from "../../types";


/**
 * Define UserProfileCard component
 */
function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>{user.name}</p>
            <p>{showEmail ? user.email : ""}</p>
            <p>{showRole ? user.role : ""}</p>
            <button onClick={() => onEdit?.(user.id)}>Edit Profile</button>
            {children}
        </div>
    )
}

export default UserProfileCard;