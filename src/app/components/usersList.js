async function getData() {
    const res = await fetch('http://moonliquore.test/api/v1/users', {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('fail to fetch data');
    }

    return res.json();
}

export default async function UsersList() {
    const data = await getData();

    const orderData = data.data.sort((a, b) => b.petitions - a.petitions);

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {orderData.map(item => (
                <li className="flex justify-between gap-x-6 py-5" key={item.id}>
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1084px-Unknown_person.jpg" alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{item.name}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="mt-1 text-xs leading-5 text-white-500">{item.petitions}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}