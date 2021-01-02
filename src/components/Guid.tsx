import React, { useLayoutEffect } from "react";
import { IPost } from "../type/interface";
import { Sotrage } from "../type/const";
import YouTube from "react-youtube";
import { getFromUrl } from "@janda-com/front";

interface BookingHome {
  data: IPost;
}

const Guid: React.FC<BookingHome> = ({ data }) => {
  const opts: object = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div id={"infonav" + data._id} className="bookingHome guideInfo">
      <div className="bookingHome__outer guideInfo__outer">
        <h2 className="guideInfo__title">{data.title}</h2>

        <div className="guideInfo__body">
          {/* {data.headerImage && (
            <img
              src={Sotrage + data.headerImage}
              className="guideInfo__con__list__img"
            />
          )} */}
          {data.body && (
            <div
              dangerouslySetInnerHTML={{
                __html: data.body,
              }}
            ></div>
          )}

          {/* 
          <YouTube
            videoId="O6P86uwfdR0"
            containerClassName="guideInfo__body-video"
            opts={opts}
          /> */}
          {/* 
          {data.video && (
            <div className="guideInfo__body-video">
              <YouTube
                // videoId="2g811Eo7K8U"
                videoId={data.video}
                containerClassName="guideInfo__video"
                opts={opts}
              />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Guid;
