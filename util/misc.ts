export const itemIdExistsInArray = (searchArray: any[], id: string) => {
  return searchArray.findIndex((item) => item.id === id) !== -1
}
