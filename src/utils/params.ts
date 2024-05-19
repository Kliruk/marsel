import {ReadonlyURLSearchParams} from "next/navigation";
// import {PORTFOLIO_PAGES} from "@/constants/portfolio";


// interface IArguments {
//   (searchParam: ReadonlyURLSearchParams,
//     urlParam: string,
//     defaultObj: {
//       name: string,
//       param: string,
//       text: string[]
//     }): { name: string, param: string, text: string[] } | null
// }

/**
 * Updates url params key to certain value
 * @param {name} name is the key of its param
 * @param {value} value is the value of param
 * @param {searchParams} searchParams is a Client Component hook that
 *  lets you read the current URL's query string.
 */
export const updateParams = (name: string, value: number | string,
    searchParams: ReadonlyURLSearchParams) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value.toString());
  window.history.replaceState(null, "", `?${params.toString()}`);
};

// https://youtu.be/HuZxu_i4gO0?t=1116

/**
 * Checks if url param exists and returns it is value
 * if url param does not exists also check for defaultValue
 * if defaultValue is undefined, then do not creates a new param value
 * and returns null(this is how we can create default value and just
 * check for existing)
 * @param {searchParams} searchParams is a Client Component hook that
 *  lets you read the current URL's query string.
 * @param {param} param is the key of url param
 * @param {defaultValue} defaultValue is the value of url param
 * @return {string}
 */
export const paramExists = (searchParams: ReadonlyURLSearchParams,
    param: string, defaultValue: string | undefined = undefined
): string => {
  const pages = (searchParams.get(param) || "");
  if (!pages && defaultValue != undefined) {
    updateParams(param, defaultValue, searchParams);
    return defaultValue;
  }

  return pages;
};
