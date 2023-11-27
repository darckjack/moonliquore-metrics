async function getData() {
    const res = await fetch('http://moonliquore.test/api/v1/drinks', {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('fail to fetch data');
    }

    return res.json();
}

export default async function DrinkList() {
    const data = await getData();

    const orderData = data.data.sort((a, b) => b.petitions - a.petitions);

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {orderData.map(item => (
                <li className="flex justify-between gap-x-6 py-5" key={item.id}>
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://www.monin.com/media/catalog/product/cache/086f110b92ec89cebc323a4780ab42bd/4/2/42240b83-6ed9-438c-ae84-19872c89f777-2.png" alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{item.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-white-500">{item.description}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">{item.ingredients}</p>
                        <p className="mt-1 text-xs leading-5 text-white-500">{item.petitions}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}