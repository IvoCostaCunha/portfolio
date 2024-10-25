export default class Sort {
  static sortByNumberAscending(a: number, b: number): number {
    const dateA: number = a
    const dateB: number = b
    return (dateA < dateB) ? -1 : 1
  }

  static sortByNumberDescending(a: number, b: number): number {
    const dateA: number = a
    const dateB: number = b
    return (dateA < dateB) ? 1 : -1
  }

  static sortByStringAscending(a: string, b: string): number {
    const nameA: string = a
    const nameB: string = b
    return (nameA < nameB) ? -1 : 1
  }

  static sortByStringDescending(a: string, b: string): number {
    const nameA: string = a
    const nameB: string = b
    return (nameA < nameB) ? 1 : -1
  }
}