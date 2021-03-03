const htmlEntities: { [key: string]: string } = {
    "!": "&#33",
    "\"": "&#34",
    "#": "&#35",
    "$": "&#36",
    "%": "&#37",
    "&": "&amp",
    "'": "&#39",
    "(": "&#40",
    ")": "&#41",
    "*": "&#42",
    "+": "&#43",
    ",": "&#44",
    "-": "&#45",
    ".": "&#46",
    "/": "&#47",
    "0": "&#48",
    "1": "&#49",
    "2": "&#50",
    "3": "&#51",
    "4": "&#52",
    "5": "&#53",
    "6": "&#54",
    "7": "&#55",
    "8": "&#56",
    "9": "&#57",
    ":": "&#58",
    "<": "&lt",
    ": ": "&#61",
    ">": "&gt",
    "?": "&#63",
    "@": "&#64",
    "A": "&#65",
    "B": "&#66",
    "C": "&#67",
    "D": "&#68",
    "E": "&#69",
    "F": "&#70",
    "G": "&#71",
    "H": "&#72",
    "I": "&#73",
    "J": "&#74",
    "K": "&#75",
    "L": "&#76",
    "M": "&#77",
    "N": "&#78",
    "O": "&#79",
    "P": "&#80",
    "Q": "&#81",
    "R": "&#82",
    "S": "&#83",
    "T": "&#84",
    "U": "&#85",
    "V": "&#86",
    "W": "&#87",
    "X": "&#88",
    "Y": "&#89",
    "Z": "&#90",
    "[": "&#91",
    "\\": "&#92",
    "]": "&#93",
    "^": "&#94",
    "_": "&#95",
    "`": "&#96",
    "a": "&#97",
    "b": "&#98",
    "c": "&#99",
    "d": "&#100",
    "e": "&#101",
    "f": "&#102",
    "g": "&#103",
    "h": "&#104",
    "i": "&#105",
    "j": "&#106",
    "k": "&#107",
    "l": "&#108",
    "m": "&#109",
    "n": "&#110",
    "o": "&#111",
    "p": "&#112",
    "q": "&#113",
    "r": "&#114",
    "s": "&#115",
    "t": "&#116",
    "u": "&#117",
    "v": "&#118",
    "w": "&#119",
    "x": "&#120",
    "y": "&#121",
    "z": "&#122",
    "{": "&#123",
    "|": "&#124",
    "}": "&#125",
    "~": "&#126",
    "À": "&Agrave",
    "Á": "&Aacute",
    "Â": "&Acirc",
    "Ã": "&Atilde",
    "Ä": "&Auml",
    "Å": "&Aring",
    "Æ": "&AElig",
    "Ç": "&Ccedil",
    "È": "&Egrave",
    "É": "&Eacute",
    "Ê": "&Ecirc",
    "Ë": "&Euml",
    "Ì": "&Igrave",
    "Í": "&Iacute",
    "Î": "&Icirc",
    "Ï": "&Iuml",
    "Ð": "&ETH",
    "Ñ": "&Ntilde",
    "Ò": "&Ograve",
    "Ó": "&Oacute",
    "Ô": "&Ocirc",
    "Õ": "&Otilde",
    "Ö": "&Ouml",
    "Ø": "&Oslash",
    "Ù": "&Ugrave",
    "Ú": "&Uacute",
    "Û": "&Ucirc",
    "Ü": "&Uuml",
    "Ý": "&Yacute",
    "Þ": "&THORN",
    "ß": "&szlig",
    "à": "&agrave",
    "á": "&aacute",
    "â": "&acirc",
    "ã": "&atilde",
    "ä": "&auml",
    "å": "&aring",
    "æ": "&aelig",
    "ç": "&ccedil",
    "è": "&egrave",
    "é": "&eacute",
    "ê": "&ecirc",
    "ë": "&euml",
    "ì": "&igrave",
    "í": "&iacute",
    "î": "&icirc",
    "ï": "&iuml",
    "ð": "&eth",
    "ñ": "&ntilde",
    "ò": "&ograve",
    "ó": "&oacute",
    "ô": "&ocirc",
    "õ": "&otilde",
    "ö": "&ouml",
    "ø": "&oslash",
    "ù": "&ugrave",
    "ú": "&uacute",
    "û": "&ucirc",
    "ü": "&uuml",
    "ý": "&yacute",
    "þ": "&thorn",
    "ÿ": "&yuml",
    " ": "&nbsp",
    "¡": "&iexcl",
    "¢": "&cent",
    "£": "&pound",
    "¤": "&curren",
    "¥": "&yen",
    "¦": "&brvbar",
    "§": "&sect",
    "¨": "&uml",
    "©": "&copy",
    "ª": "&ordf",
    "«": "&laquo",
    "¬": "&not",
    "­": "&shy",
    "®": "&reg",
    "¯": "&macr",
    "°": "&deg",
    "±": "&plusmn",
    "²": "&sup2",
    "³": "&sup3",
    "´": "&acute",
    "µ": "&micro",
    "¶": "&para",
    "¸": "&cedil",
    "¹": "&sup1",
    "º": "&ordm",
    "»": "&raquo",
    "¼": "&frac14",
    "½": "&frac12",
    "¾": "&frac34",
    "¿": "&iquest",
    "×": "&times",
    "÷": "&divide",
    "∀": "&forall",
    "∂": "&part",
    "∃": "&exist",
    "∅": "&empty",
    "∇": "&nabla",
    "∈": "&isin",
    "∉": "&notin",
    "∋": "&ni",
    "∏": "&prod",
    "∑": "&sum",
    "−": "&minus",
    "∗": "&lowast",
    "√": "&radic",
    "∝": "&prop",
    "∞": "&infin",
    "∠": "&ang",
    "∧": "&and",
    "∨": "&or",
    "∩": "&cap",
    "∪": "&cup",
    "∫": "&int",
    "∴": "&there4",
    "∼": "&sim",
    "≅": "&cong",
    "≈": "&asymp",
    "≠": "&ne",
    "≡": "&equiv",
    "≤": "&le",
    "≥": "&ge",
    "⊂": "&sub",
    "⊃": "&sup",
    "⊄": "&nsub",
    "⊆": "&sube",
    "⊇": "&supe",
    "⊕": "&oplus",
    "⊗": "&otimes",
    "⊥": "&perp",
    "⋅": "&sdot",
    "Α": "&Alpha",
    "Β": "&Beta",
    "Γ": "&Gamma",
    "Δ": "&Delta",
    "Ε": "&Epsilon",
    "Ζ": "&Zeta",
    "Η": "&Eta",
    "Θ": "&Theta",
    "Ι": "&Iota",
    "Κ": "&Kappa",
    "Λ": "&Lambda",
    "Μ": "&Mu",
    "Ν": "&Nu",
    "Ξ": "&Xi",
    "Ο": "&Omicron",
    "Π": "&Pi",
    "Ρ": "&Rho",
    "Σ": "&Sigma",
    "Τ": "&Tau",
    "Υ": "&Upsilon",
    "Φ": "&Phi",
    "Χ": "&Chi",
    "Ψ": "&Psi",
    "Ω": "&Omega",
    "α": "&alpha",
    "β": "&beta",
    "γ": "&gamma",
    "δ": "&delta",
    "ε": "&epsilon",
    "ζ": "&zeta",
    "η": "&eta",
    "θ": "&theta",
    "ι": "&iota",
    "κ": "&kappa",
    "λ": "&lambda",
    "μ": "&mu",
    "ν": "&nu",
    "ξ": "&xi",
    "ο": "&omicron",
    "π": "&pi",
    "ρ": "&rho",
    "ς": "&sigmaf",
    "σ": "&sigma",
    "τ": "&tau",
    "υ": "&upsilon",
    "φ": "&phi",
    "χ": "&chi",
    "ψ": "&psi",
    "ω": "&omega",
    "ϑ": "&thetasym",
    "ϒ": "&upsih",
    "ϖ": "&piv",
    "Œ": "&OElig",
    "œ": "&oelig",
    "Š": "&Scaron",
    "š": "&scaron",
    "Ÿ": "&Yuml",
    "ƒ": "&fnof",
    "ˆ": "&circ",
    "˜": "&tilde",
    " ": "&ensp",
    " ": "&emsp",
    " ": "&thinsp",
    "‌": "&zwnj",
    "‍": "&zwj",
    "‎": "&lrm",
    "‏": "&rlm",
    "–": "&ndash",
    "—": "&mdash",
    "‘": "&lsquo",
    "’": "&rsquo",
    "‚": "&sbquo",
    "“": "&ldquo",
    "”": "&rdquo",
    "„": "&bdquo",
    "†": "&dagger",
    "‡": "&Dagger",
    "•": "&bull",
    "…": "&hellip",
    "‰": "&permil",
    "′": "&prime",
    "″": "&Prime",
    "‹": "&lsaquo",
    "›": "&rsaquo",
    "‾": "&oline",
    "€": "&euro",
    "™": "&trade",
    "←": "&larr",
    "↑": "&uarr",
    "→": "&rarr",
    "↓": "&darr",
    "↔": "&harr",
    "↵": "&crarr",
    "⌈": "&lceil",
    "⌉": "&rceil",
    "⌊": "&lfloor",
    "⌋": "&rfloor",
    "◊": "&loz",
    "♠": "&spades",
    "♣": "&clubs",
    "♥": "&hearts",
    "♦": "&diams"
}

export function toUTF8(data: string): string {
    const symb: string[] = Object.keys(htmlEntities)
    for(let i = 0; symb.length > i; i++){
        const toConvert = htmlEntities[symb[i]]
        const to = symb[i]
        data = data.split(toConvert + ";").join(to)
        data = data.split(toConvert.toLowerCase() + ";").join(to.toLowerCase())
    }
    return data
}