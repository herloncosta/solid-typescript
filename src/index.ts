import AbstractShareButton from "./AbstractShareButton"
import ShareButtonTwitter from "./ShareButtonTwitter"
import ShareButtonFacebook from "./ShareButtonFacebook"
import ShareButtonLinkedIn from "./ShareButtonLinkedIn"
import ShareButtonPrint from "./ShareButtonPrint"
import DOMEventHandler from "./DOMEventHandler"

// import MockEventHandler from "./MockEventHandler"
// const eventHandler = new MockEventHandler()

const eventHandler = new DOMEventHandler()

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://instagram.com/herloncosta_")
twitter.bind()

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https://instagram.com/herloncosta_")
facebook.bind()

const linkedin: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, ".btn-linkedin", "https://instagram.com/herloncosta_")
linkedin.bind()

const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print")
print.bind()
