export function mapBy(array, prop) {
  return array.reduce((map, item) => {
    if (item[prop]) map[item[prop]] = item;

    return map;
  }, {});
}
