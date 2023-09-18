const musicLibrary = (name, artist, album, genre) => {
    const getName = () => name
    const getArtist = () => artist
    const getAlbum = () => album
    const getGenre = () => genre

    const getQueue = song => {
        console.log(`Now playing ${name} by ${artist}`)
        console.log(`Next up ${song.getName()} by ${song.getArtist()}`)
    }

    const somethingRandom = () => {
        console.log(getAlbum())
    }
    return { getQueue, getName, getArtist, somethingRandom }
}



let currentSong = musicLibrary('Lunar', 'Virtual Riot', 'The Classics EP', 'Dubstep')
let nextSong = musicLibrary('Always', 'Kagune', 'Always EP', 'Dubstep')
currentSong.getQueue(nextSong)
currentSong.somethingRandom()