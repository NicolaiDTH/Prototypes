function Media(title, duration) {
 this.title = title;
 this.duration = duration;
 this.isPlaying = false;
}

Media.prototype.play = function() {
 this.isPlaying = true;
};

Meda.prototype.stop = function() {
 this.isPlaying = false;
};