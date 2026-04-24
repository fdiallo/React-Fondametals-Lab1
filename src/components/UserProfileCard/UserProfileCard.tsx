import type { UserProfileCardProps } from "../../types";


function UserProfileCard({user, showEmail, showRole}: UserProfileCardProps) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <p>{showEmail}</p>
            <p>{showRole}</p>
        </div>
    )
}

export default UserProfileCard;