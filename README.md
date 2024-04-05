# hello-github-package (@heiwa4126/hello-github-package)

GitHub Packages の練習で
[GitHub Packages のクイックスタート - GitHub Docs](https://docs.github.com/ja/packages/quickstart)
をやってみる。

index.js はさすがに `console.log()` だとつまらないので関数にした。

## 問題

パブリックレポジトリなのに

```terminal
$ npm install @heiwa4126/hello-github-package@1.0.0
npm ERR! code E401
npm ERR! 401 Unauthorized - GET https://npm.pkg.github.com/@heiwa4126%2fhello-github-package - authentication token not provided

npm ERR! A complete log of this run can be found in: ...
```

パブリックレポジトリでもプライベートレポジトリでもパッケージは認証が必要?

[パッケージの公開 - GitHub Docs](https://docs.github.com/ja/packages/learn-github-packages/publishing-a-package)

> GitHub Packages では、personal access token (classic) を使用した認証のみがサポートされています。

### ということで Personal Access Tokens (Classic) : 略称 PAT を作る

GitHub の [Personal Access Tokens (Classic)](https://github.com/settings/tokens) で

1. 上のプルダウンで "Generate new token (classic)" を設定

2. - Note: Read Packages
   - Expiration: とりあえずデフォルトの "30 days" で
   - Select scopes: read:packages のみ

3. 一番下の "Generate token" ボタン

これで PAT が出来た。

### パッケージを使う

で、この @heiwa4126/hello-github-package パッケージを使用する側のプロジェクトのルートの .nrpmrc ファイルに

```config
@heiwa4126:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<今取得したPAT>
```

と書いて、

```sh
npm install @heiwa4126/hello-github-package
```

すれば OK。
