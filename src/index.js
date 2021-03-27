import Reveal from './reveal.js/dist/reveal.esm.js';
import RevealMarkdown from './reveal.js/plugin/markdown/markdown.esm.js';

import RevealMath from './reveal.js/plugin/math/math.esm.js';
import RevealHighlight from './reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
    math: {
        mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
        config: 'TeX-AMS_HTML-full',
        // pass other options into `MathJax.Hub.Config()`
        TeX: { Macros: { bfR: "\\mathbf{R}", bfS: "\\mathbf{S}" } }
    },
    plugins: [RevealMarkdown, RevealMath, RevealHighlight],
    width: 1920,
    height: 1080,
  
    // Factor of the display size that should remain empty around
    // the content
    margin: 0.1,
  
    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 2.0
})
deck.initialize();