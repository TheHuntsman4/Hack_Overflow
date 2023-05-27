import React from 'react';

const LottieAnimation = () => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Lottiefiles - free animation files built for Lottie</title>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@v1.5.7/dist/lottie-player.js"></script>
        <style>
          /* CSS styles here */
        </style>
      </head>
      <body>
        <div class="container">
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_3rwasyjy.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
          <a id="attribution_block" href="https://lottiefiles.com/k8bbltljf9" target="_blank" title="Coding boy" class="attribution"></a>
        </div>
      </body>
    </html>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
};

export default LottieAnimation;
