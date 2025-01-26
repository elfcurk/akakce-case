export function formatLanguage(language: string): string {
    if (language === "now") {
        return "Şimdi";
    }
    if (language === "2 hours ago") {
        return "2 saat önce";
    }
    if (language === "yesterday") {
        return "Dün";
    }
    if (language === "Iphone") {
        return "iPhone";
    }

    const date = new Date(language);
    if (!isNaN(date.getTime())) {
        return date.toLocaleString("tr-TR", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    }

    return language;
}

export function replaceIphoneLetter(text: string): string {
    return text.replace(/\biphone\b/gi, "iPhone");
}
