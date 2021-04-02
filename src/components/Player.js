// controls for our music player
// song name artist picture
import React from "react";
// import { playAudio } from '../util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ setIsPlaying, isPlaying, currentSong, audioRef, setSongInfo, songInfo, songs, setCurrentSong, setSongs }) => {

    // Ref -- to access html tags in React
    

    //States
    
    //UseEffect
    // useEffect(() => {
        
    // }, [currentSong]);

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map(song => {
            if(song.id === nextPrev.id){
                return {
                    ...song,
                    active: true,
                }
            }
            else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    }

    // Event Handlers
    const playSongHandler = () => { //play pause
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    

    const getTime = (time) => { // format time in second
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e) => { // fastforward or backward
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    };

    // JSX
    return(
            <div className="player">
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                    <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00" }</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} className="skip-back" icon={faAngleLeft} size="2x" />
                    <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying? faPause : faPlay} size="2x" />
                    <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")} className="skip-forward" icon={faAngleRight} size="2x" />
                </div>
            </div>
        );
    
}

export default Player;