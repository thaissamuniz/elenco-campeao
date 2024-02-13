let cache = []

export default async function getPlayers() {
    try {
        if (cache.length) {
            return cache
        }
        const response = await fetch('../../public/libertadores-palmeiras-teste-dev.json');
        const responseJson = await response.json();
        cache = responseJson;
        return cache;

    } catch (error) {
        console.error("algo deu errado.");
    }
}