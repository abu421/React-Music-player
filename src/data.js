import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Kattegat",
            artist: "Ragnar Lothbrok",
            cover: "https://images.hdqwalls.com/download/vikings-ragnar-4k-92-1080x1920.jpg",
            id: uuidv4(),
            active: true,
            color: ['red', 'blue'],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
        },
        {
            name: "Scandinavia",
            artist: "Lagertha",
            cover: "https://images.hdqwalls.com/download/vikings-season-4-1080x1920.jpg",
            id: uuidv4(),
            active: false,
            color: ['red', 'blue'],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
        },
        {
            name: "Iceland",
            artist: "Bjorn Ironside",
            cover: "https://images.hdqwalls.com/download/vikings-2021-6l-1080x1920.jpg",
            id: uuidv4(),
            active: false,
            color: ['red', 'blue'],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
        },
        {
            name: "Kiev",
            artist: "Maiden",
            cover: "https://images.hdqwalls.com/download/porunn-vikings-4k-xw-1080x1920.jpg",
            id: uuidv4(),
            active: false,
            color: ['red', 'blue'],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            name: "Greenland",
            artist: "Ubbe",
            cover: "https://images.hdqwalls.com/download/vikings-season-5-4k-d8-1080x1920.jpg",
            id: uuidv4(),
            active: false,
            color: ['red', 'blue'],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
        }
    ];
};

export default chillHop;