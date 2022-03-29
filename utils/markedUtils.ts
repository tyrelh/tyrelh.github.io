
// https://marked.js.org/using_pro#renderer

export const renderer = {
  image(href, title, text) {
    const nonRelativeHref = "/images/posts/" + href
    return `
        <img src="${nonRelativeHref}" alt="${title}" class="article-image" />
    `
  },
  heading(text, level, raw, slugger) {
    let component = ""
    switch(level) {
      case 1:
        component = `
          <h1 id="${slugger.slug(raw)}">${text}</h1>
        `
        break
      case 2:
        component = `
          <h2 id="${slugger.slug(raw)}">
            <span class="underline">${text}</span>
          </h2>
        `
        break
      case 3:
        component = `
          <h3 id="${slugger.slug(raw)}">${text}</h3>
        `
        break
      case 4:
        component = `
          <h4 id="${slugger.slug(raw)}">${text}</h4>
        `
        break
    }
    return component
  }
}

export function getOptions() {
  const options = {
    baseUrl: "/images/posts/"
  }
  return options
}