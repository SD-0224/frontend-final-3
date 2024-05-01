export function mapBy(array, prop) {
  return array.reduce((map, item) => {
    if (item[prop]) map[item[prop]] = item;

    return map;
  }, {});
}

export function chunk(array, chunkSize = 1) {
  const chunkCount = Math.ceil(array.length / chunkSize);

  return Array.from({ length: chunkCount }, (_v, index) => {
    const start = index * chunkSize;
    const end = start + chunkSize;

    return array.slice(start, end);
  });
}
