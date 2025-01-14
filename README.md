# JSFxxk-as-altJS

## Features
- JSFxxk（もどき）をJSに変換できる

## Requirement
- Node 22

## Usage

### ダウンロード

```sh
git clone git@github.com:reitan4742/JSFxxk-as-altJS.git
npm install
```

### パーサの生成

```sh
npm run fix && npm run all
```

### JSFxxkをJSに変換

```sh
npm run start JSFxxkのファイル
```

- `output.js`と`output.json`とが生成される
- JSFxxkのサンプルは`./sample/*`にある

#### 変換の具体例

```sh
npm run start sample/helloWorld.jsf
```

### 生成したJSの実行

```sh
node output.js
```
