import AbstractLinkShareButton from "./AbstractLinkShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonFacebook extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url)
  }

  createLink(): string {
      return `https://www.facebook.com/sharer.php?u=${this.url}`
  }
}
