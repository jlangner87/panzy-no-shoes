import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        fetchInstagramPost();
  
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;