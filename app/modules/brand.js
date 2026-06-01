/*=========================
   🎨 CSS VAR HELPER
=========================*/

export function getDataCss(cssVar) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(cssVar)
    .trim()
    .replace(/["']/g, '')
}

export function brand()
{
    const brand =  getDataCss('--brand-name');
    const slogan = getDataCss('--brand-slogan');
    const icone = getDataCss('--brand-icone');

    return [ { "marca" :  brand, "sub" : slogan, "icone" : icone } ]
}

