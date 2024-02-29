import theme from "@data/theme";

export default function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal text-${theme.colors.primary}-500">$1</strong>`
  );
}
