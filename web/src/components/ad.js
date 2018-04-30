import React from 'react'
import AdSense from 'react-adsense'

class Ad extends React.Component {
  render() {
    return (
      <AdSense.Google
        client="ca-pub-1192993843080120"
        slot="9194528313"
        format="auto"
      />
    )
  }
}

export default Ad
