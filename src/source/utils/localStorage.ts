import {quotesType} from '../quotes.ts';

export function setItemLocalStorage(key: string, value: quotesType[] | quotesType): void {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error from setItem func: ', e.message);
  }
}

export function getItemLocalStorage(key: string): quotesType | string {
  const value = localStorage.getItem(key) as string;
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error('Error from getItem func: ', e.message);
    return value;
  }
}

export function removeItemLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error from removeItem func: ', e.message);
  }
}

export function clearItemsLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (e) {
    console.error('Error from clearItems func: ', e.message);
  }
}

