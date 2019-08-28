Accounts.oauth.registerService('ibmcloud');

if (Meteor.isClient) {
  Meteor.loginWithIbmcloud = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Ibmcloud.requestCredential(options, credentialRequestCompleteCallback);
  }
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.ibmcloud'],
    forOtherUsers: ['services.ibmcloud.username']
  });
}
