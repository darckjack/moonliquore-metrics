import DrinkList from "@/app/components/drinkList";
import UsersList from "@/app/components/usersList";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex p-4">
            <DrinkList/>
        </section>
        <section className="flex p-4">
            <UsersList/>
        </section>
    </main>
  )
}
