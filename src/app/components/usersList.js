export default function UsersList({userArray}) {

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {userArray.map(item => (
                <li className="flex justify-between gap-x-6 py-5" key={item.id}>
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1084px-Unknown_person.jpg" alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{item.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-white-500">{item.email}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">id: {item.id}</p>
                        <p className="mt-1 text-xs leading-5 text-white-500">Solicitudes: {item.petitions}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}