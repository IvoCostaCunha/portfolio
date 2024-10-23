export default class Files {

  static async openFile(path: string): Promise<any> {
    window.open(path)
  }

  static onClickDownload(path: string): void {
    try {
      this.openFile(path)
    } catch(e) {
      console.error(e)
    }
  }
}