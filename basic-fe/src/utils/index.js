export const makeDate = (timestamp) => {
    let ts = timestamp
    if (typeof ts === 'string') { ts = Number(ts) * 1000}
    const date = new Date(ts);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}