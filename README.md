# all-contributors-cli

This is a tool to help automate adding contributor acknowledgements according to the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.

## Installation

You can install it via `npm`:
```
npm install all-contributors-cli
```

## Usage

```
# Add new contributor <username>, who made a contribution of type <contribution>
all-contributors add <username> <contribution>
# Example:
all-contributors add jfmengels code,doc
```
Where:
- `username` is the user's GitHub username
- `contribution` is a `,`-separated list of ways to contribute, from the following list ([see the specs](https://github.com/kentcdodds/all-contributors#emoji-key)):
  - code: 💻
  - plugin: 🔌
  - tool: 🔧
  - doc: 📖
  - question: ❓
  - test: ⚠️
  - bug: 🐛
  - example: 💡
  - blog: 📝
  - tutorial: ✅
  - video: 📹
  - talk: 📢
  - design: 🎨
  - review: 👀

## Configuration

### Add contributing section

If you don't already have a Contributing section in a Markdown file, create one. Then add the following comment tags section to it. Don't worry, they're visible only to those that read the raw file. The tags **must** be at the beginning of the line.

```md
## Contributing

 <!-- CONTRIBUTORS:START - Do not remove or modify this section -->
 <!-- CONTRIBUTORS:END -->
```

### Create a `.all-contributorsrc` file

You must create a `.all-contributorsrc` JSON file. The data used to generate the contributors list will be stored in here, and you can configure how you want `all-contributors-cli` to generate the list.

```json
{
  "file": "README.md",
  "owner": "jfmengels",
  "types": {
    "cheerful": {
      "symbol": ":smiley:"
    }
  },
  "contributors": [{
    "login": "jfmengels",
    "...": "..."
  }]
}
```

These are the keys you can specify:
- `file`: File to write the list of contributors in. Default: 'README.md'
- `projectOwner`: Name of the user the project is hosted by. Example: `jfmengels/all-contributor-cli` --> `jfmengels`. Mandatory.
- `projectName`: Name of the project. Example: `jfmengels/all-contributor-cli` --> `all-contributor-cli`. Mandatory.
- `types`: Specify custom symbols or link templates for contribution types. Can override the documented types.
- `imageSize`: Size (in px) of the user's avatar. Default: 100.
- `contributorsPerLine`: Maximum number of columns for the contributors table. Default: 7.
- `template`: Define your own template to generate the contributor list.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- CONTRIBUTORS:START - Do not remove or modify this section -->
| [![Jeroen Engels](https://avatars.githubusercontent.com/u/3869412?v=3&s=100)<br /><sub>Jeroen Engels</sub>](https://github.com/jfmengels)<br />[💻](https://github.com/jfmengels/all-contributors-cli/commits?author=jfmengels) [📖](https://github.com/jfmengels/all-contributors-cli/commits?author=jfmengels) [⚠️](https://github.com/jfmengels/all-contributors-cli/commits?author=jfmengels) |
| :---: |
<!-- CONTRIBUTORS:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind welcome!

## LICENSE

MIT
