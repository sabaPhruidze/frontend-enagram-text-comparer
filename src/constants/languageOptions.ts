export type LanguageCode = "ka" | "en";
export type LanguageOption = { code: LanguageCode; label: string };

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "ka", label: "ქართული" },
  { code: "en", label: "English" },
];
