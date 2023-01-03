import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { withRouter } from "next/router";
class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {

    return (
      <Html>
        <Head>
          <base href="/" />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
            integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
          />

         
          <meta name="google-signin-client_id" content="1015928330290-0cvqhusfc1e271nt3gff0hbne5sdgigj.apps.googleusercontent.com"></meta>
          <meta name="google-site-verification" content="dj70d_fMzK-2Jon-PWKxLY1bxPxDBQjPS_BfgxlTTZI" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-F6VQ03HNVY"></script>
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC2XLeHZ4ngj_p-aZvJBCi2vRxVKV6AyHQ&libraries=places'> </script>
 
        </Head>

        <body id="overlay">
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></script>
          <script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>
          <script defer src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>


          <script defer src="./init-firebase.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
