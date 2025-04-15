import UIKit

import DataDomeSDK

@objcMembers
class DatadomeHelper: NSObject {
    var rootUrl: String
    var cookieName: String?

    init(rootUrl: String) {
        self.rootUrl = rootUrl

        if let cookie = DataDomeSDK.getCookie() {
             self.cookieName = cookie.name
        }
    }

    func showRootURL() {
        print("[DatadomeHelper Swift] rootUrl = \(self.rootUrl)")
    }
}