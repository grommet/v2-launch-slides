# grommet slide viewer

Fork this repository to create a web-based slide presentation.

## Get Started

- Log in to GitHub, if not already

- Click the `Fork` button in the upper right of [this page](https://github.com/grommet/grommet-slides)

- Open a terminal and clone your fork to your computer

```
# git clone <url of your fork>
```

- Install dependencies

```
# cd <directory created above>
# yarn install
```

## Editing

Edit slide content in `/src/slides`. Make sure you update `/src/slides/index.tsx` to indicate the order you'd like the slides displayed.

Also, any local images should be placed in `/public`.

## Build

```
# yarn build
```

## Deploy

Create an account with [Netlify](https://netlify.com). Drop the `build` folder that was created in the previous step into the drop area on you Netlify Sites page. Point your browser at the URL displayed by Netlify.

## Save

Peserve your changes back to GitHub.

```
# git add .
# git commit -m "your message"
# git push
```


Built with [create-react-app](https://github.com/facebook/create-react-app), [typescript](https://www.typescriptlang.org), and [grommet](https://github.com/grommet/grommet).
