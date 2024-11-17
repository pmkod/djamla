
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindFunctions: ['cva'],
}

module.exports = config