export default class {
  static sendMail(address: string): void {
    window.location.assign(`mailto:${address}?subject=From portfolio.ivocostacunha.com`)
  }
}
