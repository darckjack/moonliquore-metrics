import UsersList from "@/app/components/usersList";
import DrinkSection from "@/app/components/drinkSection";
import UserSection from "@/app/components/userSection";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
        <section className="p-4">
            <h1>Bebidas</h1>
            <DrinkSection />
        </section>
        <section className="p-4">
            <h1>Usuarios</h1>
            <UserSection />
        </section>
    </main>
  )
}
