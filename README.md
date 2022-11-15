![_traichu](favicon-32x32.png?raw=true)

> **_trai´chu,** _n_. A simple, semantic start page built with HTML, CSS, and a mouse-sized bit of JavaScript.
 
**_traichu's** markup is [valid](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftressley.github.io%2F_traichu%2Findex.html) and aims to adhere to HTML semantics. [Traditional Japanese](https://www.nipponcolors.com), [WCAG 2.0](https://www.w3.org/TR/WCAG20/) compliant colors make up the color palette. The monospace font is ol' [Fira Code](https://fonts.google.com/specimen/Fira+Code) loaded via [Google Fonts](https://fonts.google.com). Icons are [inline SVGs](https://css-tricks.com/pretty-good-svg-icon-system/), [DuckDuckGo's API](https://icons.duckduckgo.com/ip3/duckduckgo.com.ico) delivers the favicons, and [OpenWeather's API](https://openweathermap.org) provides the weather forecast and icons. Vanilla JavaScript and CSS handle all interactivity.

[DuckDuckGo](https://duckduckgo.com) is the default search engine because privacy is important 'round here.

⚠️ **You will need to generate your own OpenWeather API key!**
1. [Register for an OpenWeather account](https://home.openweathermap.org/users/sign_up) (OpenWeather will generate a default API key)
2. Sign in and navigate to Username > API keys and copy the key
3. Paste the key into [`line 10`](https://github.com/Tressley/_traichu/blob/3f2d695a4677f2a99c2c112fd11d01d71d6a05e9/js/main.js#L10) of `main.js`

**How to update your city**
1. Find your city using [OpenWeather's search](https://openweathermap.org/find)
2. Copy the city ID from the end of the URL
> `https://openweathermap.org/city/1850147` 🠆 `1850147`
3. Paste the city ID into [`line 26`](https://github.com/Tressley/_traichu/blob/3f2d695a4677f2a99c2c112fd11d01d71d6a05e9/js/main.js#L26) of `main.js`


![_traichu's dark mode](https://i.imgur.com/ncQcCGy.jpg)

![_traichu's light mode](https://i.imgur.com/Gst8wfz.jpg)
