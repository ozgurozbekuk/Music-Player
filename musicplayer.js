class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 1;
    }

    getMusic() {
        return this.musicList[this.index]
    }

    next() {
        if(this.index +1 < musicList.length){
            this.index++
        }else {
            this.index = 0;
        }
    }

    prev() {
        if(this.index != 0){
            this.index--;
        }else {
            this.index = musicList.length - 1;
        }

    }
}