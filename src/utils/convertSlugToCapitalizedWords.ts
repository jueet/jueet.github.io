export default function convertSlugToCapitalizedWords(slug: string): string {
  const words = slug.split("-");
  const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
  const capitalizedText = capitalizedWords.join(" ");
  return capitalizedText;
}

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
