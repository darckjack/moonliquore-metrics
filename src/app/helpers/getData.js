export default async function getData(endpoint) {
    const res = await fetch(`http://moonliquore.test/api/v1/${endpoint}`, {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('fail to fetch data');
    }

    return res.json();
}