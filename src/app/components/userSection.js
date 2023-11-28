import getData from "../helpers/getData";
import UsersList from "@/app/components/usersList";
import UserChart from "@/app/components/userChart";

export default async function UserSection() {
    const data = await getData('users');

    return (
        <div className="flex flex-row">
            <div className="basis-1/2">
                <UsersList userArray={data.data} />
            </div>

            <div className="basis-1/2 ml-5">
                <UserChart userArray={data.data} />
            </div>
        </div>
    )
}

