# Publishing

```text
“Clean code always looks like it was written by someone who cares.”
- Michael Feathers
```

![](../resource/image/my_old_code.jpg)

### Global ~/.npmrc

```
registry=https://registry.npmjs.org/
@danginkgo:registry=https://registry.npmjs.org/

//registry.npmjs.org/:_authToken=<AUTH_TOKEN from www.npmjs.com/settings/danginkgo/tokens>

init-author-name=Dan Rusu
init-author-email=danginkgo@yahoo.com
init-license=MIT
```

### NPM publish

```bash
npm login --auth-type legacy [--otp=<otpFromApp>]
npm publish [--access=public]
```

- you can use this in package.json

```json
"publishConfig": {
  "registry": "https://registry.npmjs.org/",
  "access": "public",
}
```
