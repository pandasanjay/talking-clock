const formatter = {
    lowerCase: (data) => data.toLowerCase()
}

export const template = (templateText, data) => {
    const pattern = /{{\s*(\w+?)(?:\|(\w+?))?s*}}/g; // {{property}} or {{property|lowerCase}}
    return templateText.replace(pattern, (_,token, format) => (format?formatter[format](data[token]):data[token]) || "");
}

/* eslint-disable import/no-dynamic-require,global-require  */
export const getTemplate = (type, lang) => require(`../langs/${type}/${lang}.js`)