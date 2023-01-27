import compareTwoStrings from "./modules/StringSimilarity.js";

const labelEmailValid = document.getElementById("labelEmailValid");

const emailProviders = [
  { name: "Gmail", domain: "gmail.com" },
  { name: "Hotmail", domain: "hotmail.com" },
  { name: "Yahoo", domain: "yahoo.com" },
  { name: "Outlook", domain: "outlook.com" },
  { name: "UOL", domain: "uol.com.br" },
  { name: "Terra", domain: "terra.com.br" },
  { name: "Bol", domain: "bol.com.br" },
  { name: "Globo", domain: "globo.com" },
  { name: "iG", domain: "ig.com.br" },
  { name: "ZipMail", domain: "zipmail.com.br" },
  { name: "BrTurbo", domain: "brturbo.com.br" },
  { name: "Yahoo! Mail Plus", domain: "yahoo.com.br" },
  { name: "Superig", domain: "superig.com.br" },
  { name: "Mail.com", domain: "mail.com" },
  { name: "Google Workspace", domain: "googlemail.com" },
  { name: "Zoho Mail", domain: "zoho.com" },
  { name: "R7", domain: "r7.com" },
  { name: "Hostinger", domain: "hostinger.com" },
  { name: "KingHost", domain: "kinghost.net" },
  { name: "Hostgator", domain: "hostgator.com.br" }
];

function checkEmailProvider(email) {
    const domain = email.split("@").pop();
    const exactProvider = emailProviders.find(provider => provider.domain === domain);
    /* if(exactProvider) return exactProvider; */
    if(!exactProvider) {
      const threshold = 0.6; // 60%
      const similarProvider = emailProviders.find(provider => {
          const sim = compareTwoStrings(domain, provider.domain) / 100;
          return sim >= threshold;
      });
      return similarProvider;
    }
};

document.getElementById("input-email").addEventListener("focusout", event => {
  const mostSimilarProvider = checkEmailProvider(event.target.value);
  labelEmailValid.innerHTML = `A extensao de email que você esta tentado usar e a <b>${mostSimilarProvider.domain}</b>? do(a) ${mostSimilarProvider.name}`;
});
