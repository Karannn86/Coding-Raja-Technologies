import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import { MusicContext } from "../Context";

function LikedMusic() {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const setlikedMusic = musicContext.setLikedMusic;

  useEffect(() => {
    window.scrollTo(0, 0);
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    setlikedMusic(localLikedMusic);
  }, [setlikedMusic]);

  return (
    <div>
      {likedMusic.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="py-5 text-center">
                You don't have any liked music yet!
              </h3>
              <div className="text-center">
              <i class="ri-heart-line"></i>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-danger text-center py-3">
            Your Liked Music <i className="bi bi-heart-fill text-danger"></i>
          </h1>
        </div>
      )}

      <div className="container">
        <div className="row">
          {likedMusic.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default LikedMusic;