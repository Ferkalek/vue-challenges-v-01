import store from "../store";
import { locales } from "../constants/locales.const";

export default function localizeFilter(key) {
  const localeKey = store.getters.locale || locales[0].locale;
  const locale = locales.find((loc) => loc.locale === localeKey);

  return locale.file[key] || `[Localize error]: key ${key} not found`;
}
