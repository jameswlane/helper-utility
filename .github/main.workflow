workflow "Build Pipeline" {
  on = "push"
  resolves = ["Install Dependencies"]
}

action "Install Dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "npmvet" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "verify:npmvet"
  needs = ["Install Dependencies"]
}

action "tslint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "tslint"
  needs = ["npmvet"]
}

action "test" {
  uses = "actions/node-matrix@v1.0.0"
  args = ["8", "10", "12"]
  secrets = ["GITHUB_TOKEN"]
  needs = ["tslint"]
}

action "Coverage" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test:coverage:codecov"
  needs = ["test"]
}

action "Build TypeScript" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ts:build"
  needs = ["Coverage"]
}

action "Semantic Release" {
  uses = "owner/repo/path@ref"
  args = "semantic-release"
  needs = ["Build TypeScript"]
}
