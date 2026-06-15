const TRANSLATE_API = "https://libretranslate.de/translate";
const CACHE_KEY = "portfolioTranslationCache";

function loadCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function saveCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // ignore
  }
}

export async function translateText(value, source = "fr", target = "en") {
  const cache = loadCache();
  const cacheKey = `${source}:${target}:${value}`;

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  try {
    const response = await fetch(TRANSLATE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: value,
        source,
        target,
        format: "text",
      }),
    });

    if (!response.ok) {
      throw new Error("Translation API error");
    }

    const data = await response.json();
    if (!data?.translatedText) {
      throw new Error("Unexpected translation response");
    }

    cache[cacheKey] = data.translatedText;
    saveCache(cache);
    return data.translatedText;
  } catch (error) {
    console.warn("Translation failed:", error);
    return value;
  }
}

export async function translateStructuredData(sourceData, sourceLang = "fr", targetLang = "en") {
  if (sourceLang === targetLang) {
    return sourceData;
  }

  if (typeof sourceData === "string") {
    return translateText(sourceData, sourceLang, targetLang);
  }

  if (Array.isArray(sourceData)) {
    return Promise.all(sourceData.map((item) => translateStructuredData(item, sourceLang, targetLang)));
  }

  if (typeof sourceData === "object" && sourceData !== null) {
    const entries = await Promise.all(
      Object.entries(sourceData).map(async ([key, value]) => [key, await translateStructuredData(value, sourceLang, targetLang)])
    );
    return Object.fromEntries(entries);
  }

  return sourceData;
}
