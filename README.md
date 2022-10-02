# vue-stack-cesium

A minimal sample configuration project which shows how to combine and use certain packages and is a useful testing project for new updates. This project is being maintained regulary to the new compatible versions of the used packages. Certain syntax and configuration is applied in a hopefully understandable and reusable way.

Contributions in form of best practices or corrections are welcome!

## Core features

- vue 3.2.x
- vite 3.1.x
- vuetify 3.0.0-beta.x
- Typescript 4.8.x
- cesiumJS 1.97.x

## vue related features

- vuex 4.0.x store with multiple files
- vue-router 4.1.x
- vite-plugin-cesium 1.2.x
- vite-plugin-vuetify 1.0.0-alpha.xx
- vue-shortkey 4.0.0 [to be removed]
- vue composition API examples with multiple files

## Known issues

- invalid assets urls of /assets /public when using dev or build *Fixed?*
- rebuild of cesium with vite-plugin-cesium in vite.config.ts maybe not working *Fixed?*
- ?
- ...

## upcoming changes

- replace vue-shortkey with something else

## Project setup

### use npm with vite

```bash
git clone/unzip
npm install
npm install -g vite vitejs
vite dev
```

### OR: Use vue-cli

```bash
git clone/unzip
npm install
npm install -g @vue/cli
vue ui
```

## Screenshots 2021-12-30

### Cesium Page with viewport using vite-plugin-cesium

![2021-12-30 19_40_40-vue-stack-cesium-vue-3-migration](https://user-images.githubusercontent.com/5106318/147779540-34d27a64-e63e-49dd-aeba-9310cf63c6e5.png)

### Project Structure

![2021-12-30 19_29_35-vue-stack-cesium-vite-file-structure-VSt-Code](https://user-images.githubusercontent.com/5106318/147779538-21524e49-de22-40b3-966b-098fb56c416c.png)
