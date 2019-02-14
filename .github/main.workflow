workflow "Build and deploy" {
  on = "push"
  resolves = ["Publish on GH Pages"]
}

action "Install deps" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  runs = "npm install"
}

action "Build app" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  runs = "npm run build"
  needs = ["Install deps"]
}

action "Publish on GH Pages" {
  uses = "maxheld83/ghpages@v0.1.2"
  needs = ["Build app"]
  secrets = ["GH_PAT"]
}
