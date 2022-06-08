import { Avatar, Button } from "@material-ui/core";
import { AddPhotoAlternateOutlined } from "@material-ui/icons"
import React, { useState } from "react";
import "./TweetBox.css";

function getCurrentDate(separator) {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${day < 10 ? `0${day}` : `${day}`}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
}

function TweetBox({ _db }) {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetHashtags, setTweetHashtags] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "usuario_logeado", //agregar usuario
                content: tweetMessage,
                hashtags: (tweetHashtags.replaceAll('#', '')).split(' '),
                upvoted: "0",
                upvotes_count: 0,
                downvoted: "0",
                downvotes_count: 0,
                fecha: getCurrentDate('/'),
                avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png" //enlace al bucket S3
            })
        };
        fetch(process.env.REACT_APP_API_URL_POST, requestOptions);

        setTweetMessage("");
        setTweetHashtags("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__textarea">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png" />
                    <textarea
                        maxLength="255"
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="¿Qué está pasando?"
                        type="text"
                    />
                </div>
                <div className="media__area">
                    <div className="photo__input">
                        <label for="file-input">
                            <AddPhotoAlternateOutlined fontSize="small" />
                        </label>
                        <input id="file-input" type="file" accept="image/*" />
                    </div>
                    <div className="hashtagBox__input">
                        <input
                            maxLength="255"
                            value={tweetHashtags}
                            onChange={(e) => setTweetHashtags(e.target.value)}
                            placeholder="Coloca tus hashtags de contenido"
                            type="text"
                        />
                    </div>
                </div>
                <Button disabled={tweetMessage === ""} onClick={sendTweet} type="submit" className="tweetBox__button">
                    Postear
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;