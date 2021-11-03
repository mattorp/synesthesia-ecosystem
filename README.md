# Synesthesia Ecosystem

This is a place to share, discuss, request, track, and provide feedback for community efforts for [Synesthesia](https://synesthesia.live). 

The enhancement issues are not meant to be implemented here, but they can link to the implementation, discussions, further descriptions, etc. 

A central part of this repository is providing an overview of the world of Synesthesia, so links to other sources are not limited to the community's creations. This also helps grouping guides by tools or frameworks, make users aware of some of the tools available, and reduce the risk of reimplementing existing tools or frameworks by accident.

## Contributing

The simplest way to contribute is to join the discussion in the existing [Discord community](https://discord.gg/dMVvCgXxtU) in the #tools and other #channels, or in [this repo's discussion tab](https://github.com/mattorp/synesthesia-community-efforts/discussions).

Other ways are to

- ask for, list, describe, expand on, ..., features/resources/ideas in the [issues](https://github.com/mattorp/synesthesia-community-efforts/issues),
- edit this file
- or add new files for more in-depth information.

The #feature-suggestions channel in [Discord](https://discord.gg/dMVvCgXxtU) may prove an inspiration. Some of these features can be implemented outside Synesthesia, which lets the team focus on core features instead.

## Table of Contents

- [Contributing](#contributing)
- [Table of Contents](#table-of-contents)
- [GLSL](#glsl)
  - [Guides](#guides)
- [Art style](#art-style)
  - [Glitch Art](#glitch-art)
    - [Circuit Bending](#circuit-bending)
    - [Text](#text)
- [Tools](#tools)
  - [OBS](#obs)
  - [Resolume](#resolume)
  - [MadMapper](#madmapper)
  - [TouchDesigner](#touchdesigner)
  - [Houdini](#houdini)
  - [OctaneRender](#octanerender)
  - [Texture sharing](#texture-sharing)
    - [Spout](#spout)
    - [Syphon Recorder](#syphon-recorder)
    - [NDI](#ndi)
  - [Sound Siphon](#sound-siphon)
  - [VSCode extensions](#vscode-extensions)
    - [glsl canvas](#glsl-canvas)
  - [APIs](#apis)
    - [syn-server](#syn-server)
- [Projects](#projects)
  - [Games](#games)
    - [syn-games](#syn-games)
- [FAQ](#faq)

## GLSL

### Guides

<https://thebookofshaders.com> as recommended on <https://production.synesthesia.live/faq>

## Art style

### Glitch Art

#### Circuit Bending

- [Circuit Bending a Video Mixer for Glitch Art by allmyfriendsaresynths](https://www.youtube.com/watch?v=AM8H7nDEtRc)

#### Text

- [Broken Unicode by UFFFD](https://ufffd.com/zalgo/)

## Tools

### OBS

<https://obsproject.com>

- Help
  - <https://obsproject.com/help>

### Resolume

<https://resolume.com/>

- Help
  - <https://resolume.com/training>
  - <https://resolume.com/support?avenue-arena>
  - <https://resolume.com/support?wire>

### MadMapper

<https://madmapper.com>

- Help
  - <https://www.youtube.com/channel/UCC9p0fzuYik453n9fXFjpgg>
  - <http://forum.garagecube.com/viewforum.php?f=31>

### TouchDesigner

<https://derivative.ca>

- Help
  - <https://derivative.ca/learn>

### Houdini

<https://www.sidefx.com>

- Help
  - <https://www.sidefx.com/tutorials/>

### OctaneRender

<https://home.otoy.com/render/octane-render/>

- Help
  - <https://docs.otoy.com/Portal/Home.htm>

### Texture sharing

With these tools you can send video from one application to another.

[Spout](#spout) and [Syphon Recorder](#syphon-recorder) are more performant [^more-performant]. For remote sharing, you can use [NDI](#ndi).

  [^more-performant]: _more performant_: the_void* on how they differ: <https://discord.com/channels/729824270913503374/904193890452660224/905209251574734909>

#### Spout

<https://spout.zeal.co>

#### Syphon Recorder

<http://syphon.v002.info>

#### NDI

<https://www.ndi.tv>

- Help
  - <https://forums.newtek.com/#ndi-network-device-interface.360>

### Sound Siphon

<https://staticz.com/soundsiphon/>

### VSCode extensions

#### glsl canvas

> The extension opens a live WebGL preview of GLSL shaders within VSCode by providing a Show glslCanvas command.

[glsl-canvas](https://marketplace.visualstudio.com/items?itemName=circledev.glsl-canvas)

_glsl canvas requires small adjustments to the file, which will be solved by [#3][i3]._

[i3]: https://github.com/mattorp/synesthesia-community-efforts/issues/3

### APIs

#### syn-server

>This functions as a REST endpoint to communicate with Synesthesia.

[syn-server](https://github.com/mattorp/syn-server)

## Projects

### Games

#### syn-games

>A suite of tools that allow various interactions with Synesthesia with the goal of creating new types of games: Sports, board games, language learning, song/music lessons, etc.

_This repo will be refactored into smaller packages soon, and the documentation improved._
[syn-games](https://github.com/mattorp/syn-games)

## FAQ
