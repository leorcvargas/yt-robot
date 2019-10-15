yt-robot
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/yt-robot.svg)](https://npmjs.org/package/yt-robot)
[![Downloads/week](https://img.shields.io/npm/dw/yt-robot.svg)](https://npmjs.org/package/yt-robot)
[![License](https://img.shields.io/npm/l/yt-robot.svg)](https://github.com/leorcvargas/yt-robot/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g yt-robot
$ ytbot COMMAND
running command...
$ ytbot (-v|--version|version)
yt-robot/0.0.0 darwin-x64 node-v10.16.3
$ ytbot --help [COMMAND]
USAGE
  $ ytbot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ytbot create [FILE]`](#ytbot-create-file)
* [`ytbot hello [FILE]`](#ytbot-hello-file)
* [`ytbot help [COMMAND]`](#ytbot-help-command)

## `ytbot create [FILE]`

describe the command here

```
USAGE
  $ ytbot create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/leorcvargas/yt-robot/blob/v0.0.0/src/commands/create.ts)_

## `ytbot hello [FILE]`

describe the command here

```
USAGE
  $ ytbot hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ytbot hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/leorcvargas/yt-robot/blob/v0.0.0/src/commands/hello.ts)_

## `ytbot help [COMMAND]`

display help for ytbot

```
USAGE
  $ ytbot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
