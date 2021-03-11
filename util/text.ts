export const SplitAndCapitalizeFirstWord = (text: string, token: string) => {
  return text
    .split(token)
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(" ")
}
