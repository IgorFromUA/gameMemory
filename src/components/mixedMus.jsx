const str = '❤♫☎♨✈✣☏■'
// + '☀✂✉☼☆✄✆☁★♕'
const mus = str.split('')
const cardsMus = [];
for (let i = 0; i < mus.length; i++) {
    const element = {
        value: mus[i],
        isFlipped: false,
        isCouple: false,
    }
    cardsMus.push(element)
    cardsMus.push(element)
}
const mixedMus = (cardsMus) => {
    const copyMus = [...cardsMus]
    const mixMus = [];
    while (copyMus.length > 0) {
        const randomId = parseInt(Math.random() * copyMus.length)
        mixMus.push(...copyMus.splice(randomId, 1))
    }
    return mixMus
}
    export const getMixedMus = () => {
    return mixedMus(cardsMus)
}
