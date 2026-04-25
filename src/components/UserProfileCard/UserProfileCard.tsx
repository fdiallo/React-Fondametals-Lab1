import type { UserProfileCardProps } from "../../types";


function UserProfileCard({user, showEmail, showRole, onEdit, children}: UserProfileCardProps) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>{user.name}</p>
            <p>{showEmail? user.email : ""}</p>
            <p>{showRole? user.role : ""}</p>
            <p>{user.avatarUrl}</p>
            <button onClick={() => onEdit?.(user.id)}>Edit Profile</button>
            {children}
        </div>
    )
}

export default UserProfileCard;