workflow "Test on push" {
  on = "push"
  resolves = ["test"]
}

action "npm ci" {
  uses = "docker://node:alpine"
  runs = "npm"
  args = "ci"
}

action "lint" {
  needs = "npm ci"
  uses = "docker://node:alpine"
  runs = "npm"
  args = "run tslint"
}

action "test" {
  needs = "lint"
  uses = "docker://node:alpine"
  runs = "npm"
  args = "run test:ci"
}

workflow "Release" {
  on = "push"
  resolves = ["semantic-release"]
}

action "master branch only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "npm ci (release)" {
  needs = "master branch only"
  uses = "docker://node:alpine"
  runs = "npm"
  args = "ci"
}

action "semantic-release" {
  needs = [
    "master branch only",
    "npm ci (release)",
  ]
  uses = "docker://timbru31/node-alpine-git"
  runs = "npm"
  args = "run semantic-release"
  secrets = ["GITHUB_TOKEN", "NPM_TOKEN"]
}
