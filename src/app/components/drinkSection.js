import getData from "../helpers/getData";
import DrinkList from "@/app/components/drinkList";
import DrinkChart from "@/app/components/drinkChart";

export default async function DrinkSection() {
    const data = await getData('drinks');
    const orderDrinkList = data.data.sort((a, b) => b.petitions - a.petitions);


    return (
        <div className="flex flex-row">
            <div className="basis-1/2">
                <DrinkList drinkArray={orderDrinkList} />
            </div>
            <div className="basis-1/4"></div>
            <div className="basis-1/4">
                <DrinkChart drinkArray={orderDrinkList} />
            </div>
        </div>
)
}

