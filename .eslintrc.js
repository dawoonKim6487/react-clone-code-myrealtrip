module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        // "eslint:recommended", 이거안됨..
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/prop-types': ['off'],
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};