import capitalize from "lodash/capitalize";
import { I18nCode } from "~/utils/common/locales";
const messages: Partial<Record<I18nCode, Record<string, string>>> = {};

export async function loadI18nJson (code: I18nCode, init = false) {
  if (!messages[code]) {
    const json = await import(`../../i18n/${code}.json?raw`);
    messages[code] = JSON.parse(json.default);
  }
  if (!init) {
    useI18nCode().value = code;
  }
}

export function translate (name: string, params?: any[], code?: I18nCode): string {
  code = code || useI18nCode().value;
  if (!messages[code]) {
    return name;
  }
  const regex = /\{(\d+)\}/g;
  return messages[code]![name].replace(regex, (_, idx) => (params || [])[+idx]);
}
export function translateT (...args: Parameters<typeof translate>): string {
  return capitalize(translate(...args));
}
export function translateTT (...args: Parameters<typeof translate>): string {
  return translate(...args).toUpperCase();
}
