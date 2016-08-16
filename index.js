// See https://github.com/pugjs/pug-lint for configuration

module.exports = {
    disallowAttributeConcatenation: true,
    disallowAttributeInterpolation: true,
    disallowAttributeTemplateString: null,
    disallowBlockExpansion: true,
    disallowClassAttributeWithStaticValue: true,
    disallowClassLiteralsBeforeAttributes: null,
    disallowClassLiteralsBeforeIdLiterals: true,
    disallowClassLiterals: null,
    disallowDuplicateAttributes: true,
    disallowHtmlText: true,
    disallowIdAttributeWithStaticValue: true,
    disallowIdLiteralsBeforeAttributes: null,
    disallowIdLiterals: null,
    disallowLegacyMixinCall: true,
    disallowMultipleLineBreaks: true,
    disallowSpaceAfterCodeOperator: null,
    disallowSpacesInsideAttributeBrackets: true,
    disallowSpecificAttributes: null,
    disallowSpecificTags: null,
    disallowStringConcatenation: true,
    disallowStringInterpolation: true,
    disallowTagInterpolation: null,
    disallowTemplateString: null,
    maximumNumberOfLines: null,
    requireClassLiteralsBeforeAttributes: true,
    requireClassLiteralsBeforeIdLiterals: true,
    requireIdLiteralsBeforeAttributes: true,
    requireLineFeedAtFileEnd: true,
    requireLowerCaseAttributes: true,
    requireLowerCaseTags: true,
    requireSpaceAfterCodeOperator: true,
    requireSpacesInsideAttributeBrackets: null,
    requireSpecificAttributes: [{
        a: "href"
    },{
        form: "action"
    }, {
        img: "alt"
    }, {
        input: "type"
    }, {
        input[type=submit]: "value"
    }],
    requireStrictEqualityOperators: true,
    validateAttributeQuoteMarks: "\"",
    validateAttributeSeparator: {
        separator: ", ",
        multiLineSeparator: "\n  "
    },
    validateDivTags: true,
    validateExtensions: true,
    validateIndentation: 4,
    validateLineBreaks: null,
    validateSelfClosingTags: true,
    validateTemplateString: true
}
