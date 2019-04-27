# Lorem ipsum

Create N bytes of lorem ipsum text.

## Install

```
npm install -g @jamen/lorem
```

Or use `npx`

```
npx @jamen/lorem 1kb
```

## Usage

Use it from command-line

```sh
$ lorem 10mb > test.txt
$ lorem 100
Lorem ipsum enim incididunt velit amet excepteur adipiscing.
```

Or use it from JavaScript

```js
const lorem = require('@jamen/lorem')

lorem(100)
// 'Lorem ipsum ...'
```

### How it works

The original text contains words with 2-13 characters. With this you can have text that looks nice at any byte size.

```
$ for i in (seq 60 70); echo $i (lorem $i); end
60 Lorem ipsum eiusmod cupidatat minim exercitation incididunt.
61 Lorem ipsum adipiscing ad consequat est qui id reprehenderit.
62 Lorem ipsum consequat mollit amet in incididunt reprehenderit.
63 Lorem ipsum excepteur sed cupidatat dolore consectetur ullamco.
64 Lorem ipsum in cupidatat consectetur labore nulla reprehenderit.
65 Lorem ipsum exercitation sed tempor duis consectetur consectetur.
66 Lorem ipsum magna incididunt mollit aliquip exercitation occaecat.
67 Lorem ipsum occaecat nulla dolor exercitation dolore reprehenderit.
68 Lorem ipsum ipsum excepteur sint adipiscing incididunt exercitation.
69 Lorem ipsum laborum exercitation enim voluptate esse ad exercitation.
70 Lorem ipsum ad duis pariatur commodo ut incididunt voluptate pariatur.
```

Past a certain length it randomly creates new sentences.

```
$ lorem 200
Lorem ipsum consequat cupidatat laborum qui proident esse cillum exercitation
irure. Cupidatat labore labore laborum ad mollit? Incididunt irure nisi
excepteur occaecat deserunt dolore eu consectetur.

$ lorem 200
Lorem ipsum duis eu occaecat consectetur consectetur deserunt, consectetur in
dolor ullamco ea anim, in occaecat incididunt consectetur laboris cupidatat
esse sit voluptate aliquip ex ea exercitation.
```
