
module.exports = { scenario, mainPage, map, country, details };

const playwrightUrl = 'https://localhost';

async function scenario(page) {
    const randomCountry = "US"
    await page.goto(`${playwrightUrl}`);
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'World Map' }).click();
    await page.waitForTimeout(3000);
    await page.locator(`path[data-code="${randomCountry}"]`).click();
    await page.waitForTimeout(3000);
    await page.locator('a[href^="/movie/"]').first().click();
    await page.waitForTimeout(3000);
    await page.getByText("I've seen it").click();
    await page.waitForTimeout(3000);
    await page.getByText('Cast', { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Crew', { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Details', { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.locator('a[href^="/country/"]').first().click();
}

async function mainPage(page) {
    await page.goto(`${playwrightUrl}`);
}

async function map(page) {
    await page.goto(`${playwrightUrl}/map`);
}

async function country(page) {
    await page.goto(`${playwrightUrl}/country/SE`);
}

async function details(page) {
    await page.goto(`${playwrightUrl}/movie/475557`);
}

const countries = [
    "AF",
"AX",
"AL",
"DZ",
"AS",
"AD",
"AO",
"AI",
"AG",
"AR",
"AM",
"AW",
"AU",
"AT",
"AZ",
"BS",
"BH",
"UM-FQ",
"BD",
"BB",
"BY",
"BE",
"BZ",
"BJ",
"BM",
"BT",
"BO",
"BQ",
"BA",
"BW",
"BV",
"BR",
"IO",
"VG",
"BN",
"BG",
"BF",
"BI",
"KH",
"CM",
"CA",
"CV",
"KY",
"CF",
"TD",
"CL",
"CN",
"CX",
"CC",
"CO",
"KM",
"CK",
"CR",
"HR",
"CU",
"CW",
"CY",
"CZ",
"CI",
"CD",
"DK",
"DJ",
"DM",
"DO",
"EC",
"EG",
"SV",
"GQ",
"ER",
"EE",
"ET",
"FK",
"FO",
"FM",
"FJ",
"FI",
"FR",
"GF",
"PF",
"TF",
"GA",
"GM",
"GE",
"DE",
"GH",
"GI",
"GO",
"GR",
"GL",
"GD",
"GP",
"GU",
"GT",
"GG",
"GN",
"GW",
"GY",
"HT",
"HM",
"HN",
"HK",
"UM-HQ",
"HU",
"IS",
"IN",
"ID",
"IR",
"IQ",
"IE",
"IM",
"IL",
"IT",
"JM",
"JP",
"UM-DQ",
"JE",
"UM-JQ",
"JO",
"JU",
"KZ",
"KE",
"KI",
"XK",
"KW",
"KG",
"LA",
"LV",
"LB",
"LS",
"LR",
"LY",
"LI",
"LT",
"LU",
"MO",
"MK",
"MG",
"MW",
"MY",
"MV",
"ML",
"MT",
"MH",
"MQ",
"MR",
"MU",
"YT",
"MX",
"UM-MQ",
"MD",
"MC",
"MN",
"ME",
"MS",
"MA",
"MZ",
"MM",
"NA",
"NR",
"NP",
"NL",
"NC",
"NZ",
"NI",
"NE",
"NG",
"NU",
"NF",
"KP",
"MP",
"NO",
"OM",
"PK",
"PW",
"PS",
"PA",
"PG",
"PY",
"PE",
"PH",
"PN",
"PL",
"PT",
"PR",
"QA",
"CG",
"RE",
"RO",
"RU",
"RW",
"BL",
"SH",
"KN",
"LC",
"MF",
"PM",
"VC",
"WS",
"SM",
"ST",
"SA",
"SN",
"RS",
"SC",
"SL",
"SG",
"SX",
"SK",
"SI",
"SB",
"SO",
"ZA",
"GS",
"KR",
"SS",
"ES",
"LK",
"SD",
"SR",
"SJ",
"SE",
"CH",
"SY",
"TW",
"TJ",
"TZ",
"TH",
"TL",
"TG",
"TK",
"TO",
"TT",
"TN",
"TR",
"TM",
"TC",
"TV",
"VI",
"UG",
"UA",
"AE",
"GB",
"US",
"UY",
"UZ",
"VU",
"VA",
"VE",
"VN",
"UM-WQ",
"WF",
"EH",
"YE",
"ZM",
"ZW",
"SZ"
]