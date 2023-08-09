public class Song {
    private String artist;
    private String name;
    private String lyrics;
    private int bpm;
    private String key;

    public Song (String artist, String name) {
        this.artist = artist;
        this.name = name;
    }

    public String getArtist() {
        return artist;
    }

    public String getName() {
        return name;
    }
}