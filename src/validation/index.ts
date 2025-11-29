export function idIsNumber(id: any) {
  const parsedId = parseInt(id);

  if (isNaN(id)) return;

  return parsedId;
}
