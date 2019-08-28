Package.describe({
  name: 'razeeio:accounts-ibmcloud',
  summary: "Login service for IBM Cloud accounts",
  version: "0.1.0",
  git: 'https://github.com/razee-io/accounts-ibmcloud.git'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('razeeio:ibmcloud@0.1.0', ['client', 'server']);

  api.addFiles('ibmcloud_login_button.css', 'client');
  api.addFiles("ibmcloud.js");
});
