import getConversatios from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/Sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
    children
}: {children: React.ReactNode}) {
    const conversations = await getConversatios();
    const users = await getUsers();
    return (
        //@ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <ConversationList users={users} initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    )
};