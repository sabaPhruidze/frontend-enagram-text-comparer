export type LanguageCode = "ka" | "en";
export type LanguageOption = { code: LanguageCode; label: string };

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "ka", label: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8" },
  { code: "en", label: "\u10d8\u10dc\u10d2\u10da\u10d8\u10e1\u10e3\u10e0\u10d8" },
];
